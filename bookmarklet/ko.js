!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="3.1.1",t=e=>{const t=`Sa11yLang${e.charAt(0).toUpperCase()+e.slice(1)}`;Sa11y.Lang.addI18n(window[t].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,exportResultsPlugin:!0,detectSPArouting:!0})};"object"==typeof Sa11y?window.location.pathname.includes("sa11y")?alert('"Sa11y" 버튼을 북마크 표시줄로 드래그합니다. 그런 다음 아무 웹페이지에서나 북마크를 클릭합니다.'):alert("이 페이지에 Sa11y가 이미 로드되었습니다. 잠시 기다리거나 페이지를 새로고침한 후 다시 시도하세요."):function(n){const s=document.createElement("link"),a=document.getElementsByTagName("head")[0];s.rel="stylesheet",s.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,s.type="text/css",a.appendChild(s);const o=document.createElement("script");o.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${n}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(o),o.onload=()=>t(n),o.onreadystatechange=()=>t(n)}("ko")}));
