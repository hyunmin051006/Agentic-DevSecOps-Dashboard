# Security Fix Suggestion: Potential Injection Surface in Form #1

**OWASP Category:** A03:2021 - Injection
**Severity:** medium
**Origin:** https://smsso.smu.ac.kr/svc/tk/Auth.do?id=www&ac=Y&RelayState=https://www.smu.ac.kr:443/_custom/smu/_common/login/login_sso.do (form#1)

## Description

입력 필드(l_token, user_timezone_offset, pwdPolicy, user_code, sid, text, password, checkbox, hidden, user_id, user_password, saveIdIpt, user_id_auth, motp_rdo, text)가 서버로 전송되는 폼이 발견되었습니다. 서버 측 파라미터 바인딩/입력 검증 여부를 확인해야 합니다.

## Recommended Fix

### Before

```
db.execute("SELECT * FROM t WHERE col = '" + l_token + "'")
```

### After

```
db.execute('SELECT * FROM t WHERE col = ?', [l_token])
```

---
Claude Code 에이전트가 자동으로 생성했습니다. 원본 소스 파일 경로를 특정할 수 없어(스캔 결과 기반) 이 저장소 안의 실제 코드를 직접 수정하는 대신 권장 조치 문서를 추가합니다.
