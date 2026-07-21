# Security Fix Suggestion: Password Field Missing autocomplete="off" (Form #1)

**OWASP Category:** A02:2021 - Cryptographic Failures
**Severity:** low
**Origin:** https://smsso.smu.ac.kr/svc/tk/Auth.do?id=www&ac=Y&RelayState=https://www.smu.ac.kr:443/_custom/smu/_common/login/login_sso.do (form#1 > input[name="null"])

## Description

비밀번호 입력 필드에 autocomplete 제어가 없어 브라우저에 자격 증명이 저장될 수 있습니다.

## Recommended Fix

### Before

```
<input type="password" name="null" />
```

### After

```
<input type="password" name="null" autocomplete="off" />
```

---
Claude Code 에이전트가 자동으로 생성했습니다. 원본 소스 파일 경로를 특정할 수 없어(스캔 결과 기반) 이 저장소 안의 실제 코드를 직접 수정하는 대신 권장 조치 문서를 추가합니다.
