// 정적분석(Semgrep) 테스트용 데모 코드 — 일부러 취약하게 작성함. 실제 서비스에 절대 사용하지 말 것.
const express = require('express')
const app = express()

app.get('/user', (req, res) => {
  const id = req.query.id
  // 취약점: 사용자 입력을 SQL 쿼리 문자열에 그대로 이어붙임 (SQL Injection)
  const query = "SELECT * FROM users WHERE id = '" + id + "'"
  db.query(query, (err, result) => {
    res.send(result)
  })
})

app.get('/run', (req, res) => {
  // 취약점: 사용자 입력을 그대로 eval()에 전달 (코드 인젝션)
  eval(req.query.code)
  res.send('ok')
})

app.listen(3000)
