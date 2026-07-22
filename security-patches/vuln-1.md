# Security Fix Suggestion: SQL Injection in Login Form

**OWASP Category:** A03:2021 - Injection
**Severity:** critical
**Origin:** src/api/auth.js

## Description

로그인 폼의 입력값이 SQL 쿼리에 그대로 결합되어 인증 우회가 가능합니다.

## Recommended Fix

### Before

```
const query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'";
db.execute(query);
```

### After

```
const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
db.execute(query, [email, password]);
```

---
Claude Code 에이전트가 자동으로 생성했습니다. 원본 소스 파일 경로를 특정할 수 없어(스캔 결과 기반) 이 저장소 안의 실제 코드를 직접 수정하는 대신 권장 조치 문서를 추가합니다.
