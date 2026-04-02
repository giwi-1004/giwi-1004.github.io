(function () {
  "use strict";

  var KAKAO_CHAT_URL = "";
  /* QR(kakao-qr-ohayeon.svg)에 인코딩된 주소와 동일한 카카오 채널/오픈채팅 URL을 넣으세요.
  예: https://open.kakao.com/o/xxxxxxxx */

  var QUESTIONS = [
    {
      id: 1,
      question: "현재 상황이 어떻게 되시나요?",
      options: [
        { label: "✔ 후유장해 진단은 받았지만 보험금 청구를 안 하셨나요?", score: 20 },
        { label: "✔ 보험금을 청구했지만 거절당하셨나요?", score: 20 },
        { label: "✔ 보험금을 받았지만 금액이 적다고 느끼시나요?", score: 15 },
        { label: "✔ 보험사와 현재 분쟁 중이신가요?", score: 20 },
        { label: "✔ 아직 치료 중", score: 5 },
      ],
    },
    {
      id: 2,
      question: "가장 걱정되는 부분은 무엇인가요?",
      options: [
        { label: "✔ 보험금을 아예 못 받을까 가장 걱정됩니다", score: 20 },
        { label: "✔ 받을 수 있는 금액보다 적게 받을까 걱정됩니다", score: 15 },
        { label: "✔ 보험사 말만 믿어도 되는지 불안합니다", score: 15 },
        { label: "✔ 어디서 도움을 받아야 할지 모르겠습니다", score: 10 },
        { label: "✔ 아직은 크게 걱정되는 부분은 없습니다", score: 0 },
      ],
    },
    {
      id: 3,
      question: "지금까지 어떻게 확인해보셨나요?",
      options: [
        { label: "✔ 혼자 알아보셨나요?", score: 20 },
        { label: "✔ 인터넷 검색으로만 확인하셨나요?", score: 15 },
        { label: "✔ 지인에게 물어보셨나요?", score: 10 },
        { label: "✔ 보험설계사에게 문의하셨나요?", score: 5 },
        { label: "✔ 전문가 상담을 받아보신 적 있으신가요?", score: 0 },
      ],
    },
    {
      id: 4,
      question: "보험사의 판단이 정확하다고 확신하시나요?",
      options: [
        { label: "✔ 전혀 확신이 없고, 의심됩니다", score: 20 },
        { label: "✔ 잘 모르겠고 판단이 어렵습니다", score: 15 },
        { label: "✔ 반반이라 확신이 없습니다", score: 10 },
        { label: "✔ 어느 정도는 맞다고 생각합니다", score: 5 },
        { label: "✔ 보험사 판단이 맞다고 생각합니다", score: 0 },
      ],
    },
    {
      id: 5,
      question: "지금 상황에서 전문가의 검토가 필요하다고 느끼시나요?",
      options: [
        { label: "✔ 전문가의 도움이 반드시 필요하다고 느껴집니다", score: 20 },
        { label: "✔ 전문가의 검토가 필요할 것 같습니다", score: 15 },
        { label: "✔ 아직은 잘 모르겠습니다", score: 10 },
        { label: "✔ 혼자 판단해도 될 것 같습니다", score: 5 },
        { label: "✔ 전문가의 도움이 필요하지 않다고 생각합니다", score: 0 },
      ],
    },
    {
      id: 6,
      question: "지금 상황을 전문가와 함께 확인해보시겠어요?",
      options: [
        { label: "✔ 지금 바로 상담을 받아보고 싶습니다", score: 20 },
        { label: "✔ 무료로 가능성만 먼저 확인해보고 싶습니다", score: 15 },
        { label: "✔ 필요한 정보만 먼저 받아보고 싶습니다", score: 10 },
        { label: "✔ 조금 더 고민해보고 결정하고 싶습니다", score: 5 },
        { label: "✔ 아직은 도움을 받을 생각이 없습니다", score: 0 },
      ],
    },
  ];

  function getResult(totalScore) {
    if (totalScore >= 80) {
      return {
        type: "A",
        title: "지금 바로 확인이 필요합니다",
        description:
          "현재 상황에서 보상 가능성이 높습니다. 빠른 검토가 중요합니다.",
        action: "보상 가능성 확인하기",
      };
    }
    if (totalScore >= 60) {
      return {
        type: "B",
        title: "전문가 확인을 권장합니다",
        description:
          "보상 가능성이 있습니다. 전문가 검토로 정확한 판단이 필요합니다.",
        action: "내 상황 확인하기",
      };
    }
    if (totalScore >= 40) {
      return {
        type: "C",
        title: "추가 확인이 필요합니다",
        description:
          "상황에 따라 보상 가능성이 달라질 수 있습니다. 검토로 방향을 잡을 수 있습니다.",
        action: "내 상황 확인하기",
      };
    }
    return {
      type: "D",
      title: "상황 변화 시 확인하세요",
      description:
        "현재는 급하지 않지만, 상황이 변하면 언제든 연락주세요.",
      action: "보상 가능성 확인하기",
    };
  }

  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  var checkState = {
    current: 0,
    answers: {},
    showResult: false,
    lastResult: null,
  };

  function sumScores(answers) {
    var sum = 0;
    QUESTIONS.forEach(function (q) {
      var idx = answers[q.id];
      if (idx !== undefined && q.options[idx]) {
        sum += q.options[idx].score;
      }
    });
    return sum;
  }

  function renderQuiz() {
    var root = document.getElementById("check-quiz-root");
    if (!root) return;

    if (checkState.showResult) {
      var total = sumScores(checkState.answers);
      var result = getResult(total);
      checkState.lastResult = result;
      root.innerHTML =
        '<div class="card card--result-elevated">' +
        '<div class="card__body card__body--p6" style="text-align:center;padding-top:2rem">' +
        '<div class="result-card__icon-wrap" aria-hidden="true">' +
        '<svg class="icon-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' +
        "</div>" +
        "<h3 class=\"result-card__title\">" +
        escapeHtml(result.title) +
        "</h3>" +
        "<p class=\"result-card__desc\">" +
        escapeHtml(result.description) +
        "</p>" +
        '<div class="result-badge">결과: ' +
        escapeHtml(result.type) +
        "등급</div>" +
        '<p class="result-cta-hint">다음 단계에서 연락처만 남기면 검토가 시작됩니다</p>' +
        '<button type="button" class="btn btn--cta btn--lg btn--block result-cta-btn" id="quiz-result-cta">' +
        escapeHtml(result.action) +
        '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        "</button>" +
        "</div></div>";

      document.getElementById("quiz-result-cta").addEventListener("click", function () {
        updateFormBanner(result);
        scrollToId("form-section");
      });
      return;
    }

    var qIndex = checkState.current;
    var q = QUESTIONS[qIndex];
    var progress = ((qIndex + 1) / QUESTIONS.length) * 100;
    var selectedIdx = checkState.answers[q.id];

    var optionsHtml = q.options
      .map(function (opt, i) {
        var id = "q" + q.id + "-opt-" + i;
        var checked = selectedIdx === i ? " checked" : "";
        var labelClasses = [];
        if (
          q.id === 2 &&
          opt.label.indexOf("보험금을 받았지만 금액이 적다고 느끼시나요?") === -1
        ) {
          labelClasses.push("quiz-option__label--q2-single-line-mobile");
        }
        if (opt.label.indexOf("보험금을 받았지만 금액이 적다고 느끼시나요?") !== -1) {
          labelClasses.push("quiz-option__label--q2-two-line-mobile");
        }
        if (q.id === 6) {
          labelClasses.push("quiz-option__label--q6-single-line-mobile");
        }
        if (
          opt.label.indexOf("인터넷 검색으로만 확인하셨나요?") !== -1 ||
          opt.label.indexOf("전문가 상담을 받아보신 적 있으신가요?") !== -1 ||
          opt.label.indexOf("보험사 판단이 맞다고 생각합니다") !== -1 ||
          opt.label.indexOf("전문가의 검토가 필요할 것 같습니다") !== -1
        ) {
          labelClasses.push("quiz-option__label--single-line-mobile");
        }
        // Keep this option readable on two lines by not forcing nowrap style.
        var labelClass = labelClasses.length
          ? ' class="' + labelClasses.join(" ") + '"'
          : "";
        var renderedLabel = escapeHtml(opt.label);
        if (opt.label.indexOf("후유장해 진단은 받았지만 보험금 청구를 안 하셨나요?") !== -1) {
          renderedLabel = renderedLabel.replace("받았지만 ", "받았지만<br />");
        }
        if (opt.label.indexOf("보험금을 받았지만 금액이 적다고 느끼시나요?") !== -1) {
          renderedLabel = renderedLabel.replace("받았지만 ", "받았지만<br />");
        }
        if (opt.label.indexOf("전문가의 도움이 반드시 필요하다고 느껴집니다") !== -1) {
          renderedLabel = renderedLabel.replace("필요하다고 ", "필요하<br />다고 ");
        }
        if (opt.label.indexOf("전문가의 도움이 필요하지 않다고 생각합니다") !== -1) {
          renderedLabel = renderedLabel.replace("필요하지 ", "필요하지<br />");
        }
        return (
          '<div class="quiz-option">' +
          '<input type="radio" name="quiz-q' +
          q.id +
          '" id="' +
          id +
          '" value="' +
          i +
          '"' +
          checked +
          ">" +
          '<label for="' +
          id +
          '"' +
          labelClass +
          ">" +
          renderedLabel +
          "</label></div>"
        );
      })
      .join("");

    var prevBtn =
      qIndex > 0
        ? '<button type="button" class="btn btn--outline-navy btn--lg" id="quiz-prev"><svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>이전</button>'
        : "";

    var nextLabel = qIndex < QUESTIONS.length - 1 ? "다음" : "결과 보기";
    var nextDisabled = selectedIdx === undefined ? " disabled" : "";
    var questionGuide =
      q.id === 1 ? '<p class="quiz-question-guide">해당하는 상황을 선택해주세요</p>' : "";

    root.innerHTML =
      '<div class="card card--quiz">' +
      '<div class="card__header card__header--quiz-top">' +
      '<div class="quiz-progress-row">' +
      "<span>질문 " +
      (qIndex + 1) +
      " / " +
      QUESTIONS.length +
      "</span>" +
      "<span>" +
      Math.round(progress) +
      "%</span></div>" +
      '<div class="progress-bar"><div class="progress-bar__fill" style="width:' +
      progress +
      '%"></div></div></div>' +
      '<div class="card__body">' +
      '<h3 class="quiz-question-title">' +
      escapeHtml(q.question) +
      "</h3>" +
      questionGuide +
      '<div class="quiz-options" id="quiz-options">' +
      optionsHtml +
      "</div>" +
      '<div class="quiz-actions">' +
      prevBtn +
      '<button type="button" class="btn btn--cta btn--lg' +
      (qIndex === 0 ? " btn--block-only" : "") +
      '" id="quiz-next"' +
      nextDisabled +
      ">" +
      nextLabel +
      '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>' +
      "</div></div></div>";

    root.querySelectorAll(".quiz-option input").forEach(function (input) {
      input.addEventListener("change", function () {
        checkState.answers[q.id] = parseInt(input.value, 10);
        renderQuiz();
      });
    });

    var nextBtn = document.getElementById("quiz-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (checkState.answers[q.id] === undefined) return;
        if (qIndex < QUESTIONS.length - 1) {
          checkState.current = qIndex + 1;
        } else {
          checkState.showResult = true;
        }
        renderQuiz();
      });
    }

    var prevEl = document.getElementById("quiz-prev");
    if (prevEl) {
      prevEl.addEventListener("click", function () {
        if (qIndex > 0) {
          checkState.current = qIndex - 1;
          renderQuiz();
        }
      });
    }
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function updateFormBanner(result) {
    var banner = document.getElementById("form-result-banner");
    if (!banner || !result) return;
    banner.textContent =
      "자가진단 결과: " + result.type + "등급 - " + result.title;
    banner.classList.add("is-visible");
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    var formBlock = document.getElementById("form-block");
    var successBlock = document.getElementById("form-success");
    var consentCheckbox = document.getElementById("privacy-consent");
    var submitBtn = document.getElementById("form-submit-btn");
    var modal = document.getElementById("privacy-modal");
    var openModalBtn = document.getElementById("privacy-view-btn");
    var closeModalBtn = document.getElementById("privacy-modal-close");

    if (!form || !formBlock || !successBlock || !consentCheckbox || !submitBtn) return;

    function syncSubmitState() {
      submitBtn.disabled = !consentCheckbox.checked;
    }

    syncSubmitState();
    consentCheckbox.addEventListener("change", syncSubmitState);

    function closeModal() {
      if (!modal) return;
      modal.classList.add("is-hidden");
    }

    if (openModalBtn && modal) {
      openModalBtn.addEventListener("click", function () {
        modal.classList.remove("is-hidden");
      });
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModal);
    }

    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (!consentCheckbox.checked) {
        alert("개인정보 수집 및 이용 동의가 필요합니다.");
        return;
      }
      var fd = new FormData(form);
      var payload = {
        name: (fd.get("name") || "").toString().trim(),
        phone: (fd.get("phone") || "").toString().trim(),
        situation: (fd.get("situation") || "").toString().trim(),
        resultType: checkState.lastResult ? checkState.lastResult.type : null,
      };

      submitBtn.disabled = true;
      try {
        var res = await fetch("/api/lead-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: payload.name,
            phone: payload.phone,
            situation: payload.situation,
          }),
        });

        if (!res.ok) {
          var errBody = await res.json().catch(function () {
            return {};
          });
          throw new Error(errBody.error || "저장 실패");
        }

        formBlock.classList.add("is-hidden");
        successBlock.classList.remove("is-hidden");
      } catch (_err) {
        alert("요청 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      } finally {
        if (!formBlock.classList.contains("is-hidden")) {
          syncSubmitState();
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Refresh/back-forward 시 브라우저가 스크롤 위치를 복원하는 경우가 있어,
    // 방문 시 항상 최상단(첫 섹션)부터 보이도록 강제합니다.
    try {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    } catch (e) {}
    window.scrollTo(0, 0);

    function bindScrollToCheck(id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", function () {
          scrollToId("check-section");
        });
      }
    }

    bindScrollToCheck("hero-scroll-check");
    bindScrollToCheck("hero-scroll-hint");
    bindScrollToCheck("compare-scroll-check");
    bindScrollToCheck("expert-scroll-check");

    var floatCheck = document.getElementById("floating-scroll-check");
    if (floatCheck) {
      floatCheck.addEventListener("click", function () {
        scrollToId("check-section");
      });
    }

    var floatForm = document.getElementById("floating-scroll-form");
    if (floatForm) {
      floatForm.addEventListener("click", function () {
        scrollToId("form-section");
      });
    }

    renderQuiz();
    initForm();
    initKakaoChatLinks();
  });

  function isValidExternalUrl(url) {
    if (!url) return false;
    if (url === "#") return false;
    return /^https?:\/\//i.test(url);
  }

  function initKakaoChatLinks() {
    var nodes = document.querySelectorAll("a.kakao-chat-link");
    if (!nodes.length) return;

    var qrAnchor = document.querySelector("a.kakao-qr__link");
    var qrHref = qrAnchor ? qrAnchor.getAttribute("href") || "" : "";
    var resolvedUrl = "";

    // Priority: explicit JS constant -> QR anchor href
    if (isValidExternalUrl(KAKAO_CHAT_URL)) {
      resolvedUrl = KAKAO_CHAT_URL;
    } else if (isValidExternalUrl(qrHref)) {
      resolvedUrl = qrHref;
    }

    if (resolvedUrl) {
      nodes.forEach(function (a) {
        a.href = resolvedUrl;
      });
      return;
    }

    // No valid destination configured yet: keep links inert
    nodes.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });
  }
})();
