export function pipStyles(): string {
  return `
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
    :root { color-scheme: dark; }
    html, body { margin: 0; padding: 0; background: rgba(10,10,10,0.92); color: #f7f7f7; font-family: Pretendard, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
    /* 세로 공간이 남을 때 콘텐츠를 세로 중앙 정렬 */
    html, body { min-height: 100vh; display: grid; place-content: center; }
    .container { display: grid; grid-template-rows: auto auto auto; gap: 2px; padding: 10px 12px; text-align: center; }
    .row { display: flex; align-items: center; justify-content: center; }
    .timer { font-variant-numeric: tabular-nums; font-weight: 800; font-size: 36px; line-height: 1; letter-spacing: 0.5px; }
    .meta { font-size: 12px; opacity: 0.85; display: flex; gap: 8px; justify-content: center; margin-top: 4px; margin-bottom: 4px; }
    .bigger { color: #ffcf33; font-weight: 800; font-size: 24px; }
    .big { color: #ffcf33; font-weight: 800; font-size: 16px; }
    
    button.pip {
      background: #ffffff14;
      color: white;
      border: 1px solid #ffffff22;
      border-radius: 8px;
      width: 60px;
      height: 40px;
      font-size: 28px;
      transition: background-color 120ms ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      padding: 0;
      cursor: pointer;
    }
    button.pip.play { background: #22c55e; border-color: #16a34a; }   /* 초록 */
    button.pip.pause { background: #ef4444; border-color: #dc2626; }  /* 빨강 */
    button.pip:active { transform: translateY(1px); }

    .pip-icon { width: 1em; height: 1em; display: block; fill: currentColor; pointer-events: none; }
    #pip-toggle .pip-icon { display: none; }
    #pip-toggle.play .icon-play { display: block; }
    #pip-toggle.pause .icon-pause { display: block; }

    #pip-timer { height: 40px; line-height: 40px; display: flex; align-items: center; }
    .label { font-size: 12px; opacity: 0.7; margin-right: 8px; }

    .btn-api { 
      background: #3b82f6; 
      border: 1px solid #2563eb; 
      color: white; 
      border-radius: 8px; /* 버튼들과 통일감 있게 조정 */
      width: 40px;      /* 아이콘 버튼이므로 정사각형 가깝게 */
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      transition: all 120ms ease;
    }
    .btn-api:hover { background: #2563eb; transform: scale(1.05); }
    .btn-api:active { transform: translateY(1px); }

    .upload-icon { width: 20px; height: 20px; fill: currentColor; }

    #pip-toast {
      position: fixed; 
      bottom: 20px; /* 위치를 조금 더 위로 */
      left: 50%; 
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.85); /* 기본 배경은 어둡게 */
      color: white; 
      padding: 6px 16px; 
      border-radius: 8px; /* 각진 스타일이 가독성에 좋을 수 있음 */
      font-size: 13px; 
      font-weight: 600;
      opacity: 0; 
      transition: all 0.2s ease-in-out;
      pointer-events: none; 
      z-index: 100;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.1);
    }
    #pip-toast.show { 
      opacity: 1; 
      bottom: 30px; /* 나타날 때 살짝 올라오는 애니메이션 */
    }
  `;
}

export function pipMarkup(): string {
  return `
    <div class="container">
      <div id="pip-toast">전송 완료!</div>
      
      <div class="row" style="gap: 6px;">
        <button id="pip-api-test" class="btn-api" aria-label="데이터 전송">
          <svg class="upload-icon" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
          </svg>
        </button>

        <button id="pip-toggle" class="pip play" aria-label="시작">
          <svg class="pip-icon icon-play" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z"></path>
          </svg>
          <svg class="pip-icon icon-pause" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 5h5v14H6zM13 5h5v14h-5z"></path>
          </svg>
        </button>
        <div class="timer" id="pip-timer">00:00:00</div>
      </div>

      <div class="row meta">
        <span id="pip-next-label">다음 시간 되는 시각</span>
        <span id="pip-next">-</span>
      </div>

      <div class="row">
        <div class="bigger" id="pip-gained">-</div>
      </div>

      <div class="row">
        <div class="big" id="pip-pace">-</div>
      </div>
    </div>
  `;
}
