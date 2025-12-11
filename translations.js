const termsStyles = `
<style>
.terms-container { font-family: 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
.terms-main-title { color: #1a1a1a; border-bottom: 3px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
.terms-intro { background: #f8f9fa; padding: 15px; border-left: 4px solid #000; margin-bottom: 25px; border-radius: 8px; }
.terms-section { margin-bottom: 30px; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.terms-section-title { color: #1a1a1a; font-weight: 700; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e9ecef; display: flex; align-items: center; gap: 10px; }
.terms-section-title i { color: #ff5c00; }
.bonus-card { border-radius: 12px; padding: 20px; margin-bottom: 20px; color: white; box-shadow: 0 8px 16px rgba(0,0,0,0.2); transition: transform 0.3s ease; }
.bonus-card:hover { transform: translateY(-5px); }
.bonus-card.johor-bonus { background: #ff5c00; color: #1a1a1a; }
.bonus-card.standard-bonus { background: #000000; }
.bonus-card.interpreter-bonus { background: #00af9b; }
.bonus-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px; }
.bonus-header h6 { margin: 0; font-size: 1.3rem; font-weight: 700; display: flex; align-items: center; gap: 10px; }
.total-badge { background: rgba(255,255,255,0.25); padding: 8px 20px; border-radius: 25px; font-weight: 700; border: 2px solid rgba(255,255,255,0.5); }
.johor-bonus .total-badge { background: rgba(0,0,0,0.2); border-color: rgba(0,0,0,0.3); }
.total-badge-special { animation: pulse 2s infinite; }
.total-badge .amount { font-size: 1.4rem; font-weight: 900; }
.bonus-breakdown { background: rgba(0,0,0,0.15); border-radius: 8px; padding: 15px; }
.johor-bonus .bonus-breakdown { background: rgba(0,0,0,0.1); }
.bonus-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(255,255,255,0.15); margin-bottom: 10px; border-radius: 6px; }
.bonus-item:last-child { margin-bottom: 0; }
.johor-bonus .bonus-item { background: rgba(0,0,0,0.1); }
.bonus-stage { display: flex; align-items: center; gap: 10px; }
.bonus-stage i { font-size: 1.2rem; }
.bonus-amount { font-size: 1.5rem; font-weight: 900; }
.terms-list { padding-left: 20px; margin-bottom: 15px; }
.terms-list li { margin-bottom: 12px; line-height: 1.7; }
.terms-sublist { margin-top: 10px; padding-left: 25px; list-style-type: circle; }
.terms-sublist li { margin-bottom: 8px; }
.privacy-notice { background: #f8f9fa; border-left: 4px solid #ff5c00; padding: 15px; margin-top: 15px; border-radius: 8px; }
.privacy-notice p { margin: 0; }
.terms-footer { text-align: center; color: #6c757d; font-size: 0.9rem; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e9ecef; }
.terms-container a { color: #010066; text-decoration: none; font-weight: 600; }
@media (max-width: 768px) { .bonus-header { flex-direction: column; align-items: flex-start; } .bonus-item { flex-direction: column; align-items: flex-start; gap: 10px; } .bonus-amount { font-size: 1.3rem; } }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
</style>`;

const bonusCardsEN = '<div class="bonus-card johor-bonus"><div class="bonus-header"><h6><i class="fas fa-map-marker-alt"></i> Mandarin - Johor</h6><div class="total-badge">Total: <span class="amount">RM500</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>After Probation (90 days)</strong></div><div class="bonus-amount">RM500</div></div></div></div><div class="bonus-card standard-bonus"><div class="bonus-header"><h6><i class="fas fa-briefcase"></i> Standard Roles (Other Locations)</h6><div class="total-badge">Total: <span class="amount">RM800</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>After Probation (90 days)</strong></div><div class="bonus-amount">RM800</div></div></div></div><div class="bonus-card interpreter-bonus"><div class="bonus-header"><h6><i class="fas fa-home"></i> Interpreter (Work From Home)</h6><div class="total-badge total-badge-special">Total: <span class="amount">RM3,000</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>After Probation (90 days)</strong></div><div class="bonus-amount">RM3,000</div></div></div></div>';

const bonusCardsJA = '<div class="bonus-card johor-bonus"><div class="bonus-header"><h6><i class="fas fa-map-marker-alt"></i> 中国語 - ジョホール</h6><div class="total-badge">合計: <span class="amount">RM500</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>試用期間後（90日）</strong></div><div class="bonus-amount">RM500</div></div></div></div><div class="bonus-card standard-bonus"><div class="bonus-header"><h6><i class="fas fa-briefcase"></i> 標準職種（その他の勤務地）</h6><div class="total-badge">合計: <span class="amount">RM800</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>試用期間後（90日）</strong></div><div class="bonus-amount">RM800</div></div></div></div><div class="bonus-card interpreter-bonus"><div class="bonus-header"><h6><i class="fas fa-home"></i> 在宅通訳</h6><div class="total-badge total-badge-special">合計: <span class="amount">RM3,000</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>試用期間後（90日）</strong></div><div class="bonus-amount">RM3,000</div></div></div></div>';

const bonusCardsKO = '<div class="bonus-card johor-bonus"><div class="bonus-header"><h6><i class="fas fa-map-marker-alt"></i> 중국어 - 조호르</h6><div class="total-badge">합계: <span class="amount">RM500</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>수습 후 (90일)</strong></div><div class="bonus-amount">RM500</div></div></div></div><div class="bonus-card standard-bonus"><div class="bonus-header"><h6><i class="fas fa-briefcase"></i> 일반 직무 (기타 위치)</h6><div class="total-badge">합계: <span class="amount">RM800</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>수습 후 (90일)</strong></div><div class="bonus-amount">RM800</div></div></div></div><div class="bonus-card interpreter-bonus"><div class="bonus-header"><h6><i class="fas fa-home"></i> 통역사 (재택 근무)</h6><div class="total-badge total-badge-special">합계: <span class="amount">RM3,000</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>수습 후 (90일)</strong></div><div class="bonus-amount">RM3,000</div></div></div></div>';

const bonusCardsZHCN = '<div class="bonus-card johor-bonus"><div class="bonus-header"><h6><i class="fas fa-map-marker-alt"></i> 普通话 - 柔佛</h6><div class="total-badge">合计: <span class="amount">RM500</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>试用期后（90天）</strong></div><div class="bonus-amount">RM500</div></div></div></div><div class="bonus-card standard-bonus"><div class="bonus-header"><h6><i class="fas fa-briefcase"></i> 标准岗位（其他地点）</h6><div class="total-badge">合计: <span class="amount">RM800</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>试用期后（90天）</strong></div><div class="bonus-amount">RM800</div></div></div></div><div class="bonus-card interpreter-bonus"><div class="bonus-header"><h6><i class="fas fa-home"></i> 在家办公口译</h6><div class="total-badge total-badge-special">合计: <span class="amount">RM3,000</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>试用期后（90天）</strong></div><div class="bonus-amount">RM3,000</div></div></div></div>';

const bonusCardsZHHK = '<div class="bonus-card johor-bonus"><div class="bonus-header"><h6><i class="fas fa-map-marker-alt"></i> 普通話 - 柔佛</h6><div class="total-badge">合計: <span class="amount">RM500</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>試用期後（90日）</strong></div><div class="bonus-amount">RM500</div></div></div></div><div class="bonus-card standard-bonus"><div class="bonus-header"><h6><i class="fas fa-briefcase"></i> 標準職位（其他地點）</h6><div class="total-badge">合計: <span class="amount">RM800</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>試用期後（90日）</strong></div><div class="bonus-amount">RM800</div></div></div></div><div class="bonus-card interpreter-bonus"><div class="bonus-header"><h6><i class="fas fa-home"></i> 在家工作口譯</h6><div class="total-badge total-badge-special">合計: <span class="amount">RM3,000</span></div></div><div class="bonus-breakdown"><div class="bonus-item"><div class="bonus-stage"><i class="fas fa-calendar-check"></i><strong>試用期後（90日）</strong></div><div class="bonus-amount">RM3,000</div></div></div></div>';


const termsContentEN = `<div class="terms-container">
<h4 class="terms-main-title">Refer a Friend Program – Terms and Conditions</h4>
<p class="terms-intro">By participating in the Teleperformance Malaysia Sdn. Bhd. ("TP") Refer a Friend program, you agree to the following terms and conditions:</p>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-money-bill-wave"></i> Referral Bonus Structure</h5>
${bonusCardsEN}
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-credit-card"></i> Payment</h5>
<ul class="terms-list">
<li><strong>Payment Method:</strong> Bonuses will be paid via <strong>Touch 'n Go eWallet only</strong>.</li>
<li><strong>Payout Schedule:</strong> Single payment after probation completion:
    <ul class="terms-sublist">
        <li><strong>Mandarin - Johor:</strong> RM500 after 90 days probation</li>
        <li><strong>Standard Roles (Other Locations):</strong> RM800 after 90 days probation</li>
        <li><strong>Interpreter (WFH):</strong> RM3,000 after 90 days probation</li>
    </ul>
</li>
<li><strong>Processing Time:</strong> Payments may take up to 30 working days after eligibility is confirmed.</li>
<li><strong>Tax Responsibility:</strong> Any taxes, levies, or statutory deductions required by law will be borne by the referrer.</li>
</ul>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-user-check"></i> Eligibility</h5>
<ol class="terms-list">
<li>Referrals must meet the minimum qualifications for the position and complete the hiring process as required by TP.</li>
<li>This program applies only to positions that are explicitly designated as eligible for referral bonuses by TP.</li>
<li><strong>Ineligible Candidates:</strong> Referred candidates who have previously applied to TP or are ex-employees will not be eligible for referral bonuses.</li>
<li>Referrals must not be current employees of TP Group in any country.</li>
<li>Only referrals submitted through TP's official referral channel/system will be eligible for the bonus.</li>
<li>Self-referrals are not allowed.</li>
<li><strong>Bonus will NOT be paid if the candidate:</strong> Resigns before completing 90 days, is terminated, or fails to meet probation requirements.</li>
</ol>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-shield-alt"></i> Consent & Data Privacy</h5>
<ul class="terms-list">
<li>By submitting a referral, you confirm that your referred friend has consented to share their personal information with TP for recruitment purposes.</li>
<li><strong>Your Rights:</strong> You have the right to access, correct, withdraw consent or request deletion of your personal data.</li>
</ul>
<div class="privacy-notice">
<p><strong>Privacy Commitment:</strong> Please review our <a href="https://www.tp.com/en-us/footer/privacy/" target="_blank">Employee Privacy Notice</a>.</p>
</div>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-file-contract"></i> General Conditions</h5>
<ul class="terms-list">
<li>TP reserves the right to modify, suspend, or terminate this program at any time without prior notice.</li>
<li>TP's decision on eligibility, payout, and interpretation of these terms shall be final and binding.</li>
</ul>
</div>

<p class="terms-footer">Last updated: December 2025</p>
</div>` + termsStyles;

const termsContentJA = `<div class="terms-container">
<h4 class="terms-main-title">友人紹介プログラム – 利用規約</h4>
<p class="terms-intro">Teleperformance Malaysia Sdn. Bhd.（「TP」）の友人紹介プログラムに参加することにより、以下の利用規約に同意するものとします：</p>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-money-bill-wave"></i> 紹介ボーナス構成</h5>
${bonusCardsJA}
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-credit-card"></i> 支払い</h5>
<ul class="terms-list">
<li><strong>支払い方法：</strong> ボーナスは<strong>Touch 'n Go eWalletのみ</strong>で支払われます。</li>
<li><strong>支払いスケジュール：</strong> 試用期間完了後の一括支払い</li>
<li><strong>処理期間：</strong> 資格確認後、支払いまで最大30営業日かかる場合があります。</li>
</ul>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-user-check"></i> 資格条件</h5>
<ol class="terms-list">
<li>紹介された候補者はポジションの最低要件を満たす必要があります。</li>
<li>以前にTPに応募したことがある、またはTPの元従業員は対象外です。</li>
<li>TPの公式紹介チャネルを通じて提出された紹介のみがボーナスの対象となります。</li>
<li>自己紹介は許可されていません。</li>
</ol>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-shield-alt"></i> 同意とデータプライバシー</h5>
<div class="privacy-notice">
<p><strong>プライバシーへの取り組み：</strong> <a href="https://www.tp.com/en-us/footer/privacy/" target="_blank">従業員プライバシー通知</a>をご確認ください。</p>
</div>
</div>

<p class="terms-footer">最終更新日：2025年12月</p>
</div>` + termsStyles;

const termsContentKO = `<div class="terms-container">
<h4 class="terms-main-title">친구 추천 프로그램 – 이용 약관</h4>
<p class="terms-intro">Teleperformance Malaysia Sdn. Bhd.("TP")의 친구 추천 프로그램에 참여함으로써 다음 이용 약관에 동의합니다：</p>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-money-bill-wave"></i> 추천 보너스 구조</h5>
${bonusCardsKO}
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-credit-card"></i> 지급</h5>
<ul class="terms-list">
<li><strong>지급 방법：</strong> 보너스는 <strong>Touch 'n Go eWallet으로만</strong> 지급됩니다.</li>
<li><strong>지급 일정：</strong> 수습 완료 후 일괄 지급</li>
<li><strong>처리 기간：</strong> 자격 확인 후 최대 30영업일이 소요될 수 있습니다.</li>
</ul>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-user-check"></i> 자격 요건</h5>
<ol class="terms-list">
<li>추천된 후보자는 해당 직무의 최소 자격을 충족해야 합니다.</li>
<li>이전에 TP에 지원한 적이 있거나 TP의 전 직원은 대상이 아닙니다.</li>
<li>TP의 공식 추천 채널을 통해 제출된 추천만 보너스 대상이 됩니다.</li>
<li>자기 추천은 허용되지 않습니다.</li>
</ol>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-shield-alt"></i> 동의 및 데이터 프라이버시</h5>
<div class="privacy-notice">
<p><strong>프라이버시 약속：</strong> <a href="https://www.tp.com/en-us/footer/privacy/" target="_blank">직원 프라이버시 고지</a>를 검토하십시오.</p>
</div>
</div>

<p class="terms-footer">최종 업데이트：2025년 12월</p>
</div>` + termsStyles;

const termsContentZHCN = `<div class="terms-container">
<h4 class="terms-main-title">推荐朋友计划 – 条款和条件</h4>
<p class="terms-intro">参与Teleperformance Malaysia Sdn. Bhd.（"TP"）的推荐朋友计划，即表示您同意以下条款和条件：</p>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-money-bill-wave"></i> 推荐奖金结构</h5>
${bonusCardsZHCN}
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-credit-card"></i> 支付</h5>
<ul class="terms-list">
<li><strong>支付方式：</strong> 奖金<strong>仅通过Touch 'n Go电子钱包</strong>发放。</li>
<li><strong>支付时间表：</strong> 试用期完成后一次性支付</li>
<li><strong>处理时间：</strong> 确认资格后，付款可能需要最多30个工作日。</li>
</ul>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-user-check"></i> 资格条件</h5>
<ol class="terms-list">
<li>推荐人必须符合职位的最低资格要求。</li>
<li>之前曾申请过TP或是TP的前员工将不符合推荐奖金的资格。</li>
<li>只有通过TP官方推荐渠道提交的推荐才有资格获得奖金。</li>
<li>不允许自我推荐。</li>
</ol>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-shield-alt"></i> 同意与数据隐私</h5>
<div class="privacy-notice">
<p><strong>隐私承诺：</strong> 请查看我们的<a href="https://www.tp.com/en-us/footer/privacy/" target="_blank">员工隐私通知</a>。</p>
</div>
</div>

<p class="terms-footer">最后更新：2025年12月</p>
</div>` + termsStyles;

const termsContentZHHK = `<div class="terms-container">
<h4 class="terms-main-title">推薦朋友計劃 – 條款和條件</h4>
<p class="terms-intro">參與Teleperformance Malaysia Sdn. Bhd.（"TP"）嘅推薦朋友計劃，即代表你同意以下條款和條件：</p>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-money-bill-wave"></i> 推薦獎金結構</h5>
${bonusCardsZHHK}
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-credit-card"></i> 支付方式</h5>
<ul class="terms-list">
<li><strong>支付方法：</strong> 獎金會<strong>只透過Touch 'n Go電子錢包</strong>發放。</li>
<li><strong>支付時間表：</strong> 試用期完成後一次過支付</li>
<li><strong>處理時間：</strong> 確認資格後，付款可能需要最多30個工作天。</li>
</ul>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-user-check"></i> 資格要求</h5>
<ol class="terms-list">
<li>被推薦人必須符合職位嘅最低資格要求。</li>
<li>之前曾申請過TP或係TP嘅前員工將不符合推薦獎金嘅資格。</li>
<li>只有透過TP官方推薦渠道提交嘅推薦先有資格獲得獎金。</li>
<li>唔允許自我推薦。</li>
</ol>
</div>

<div class="terms-section">
<h5 class="terms-section-title"><i class="fas fa-shield-alt"></i> 同意與數據私隱</h5>
<div class="privacy-notice">
<p><strong>私隱承諾：</strong> 請查看我哋嘅<a href="https://www.tp.com/en-us/footer/privacy/" target="_blank">員工私隱通知</a>。</p>
</div>
</div>

<p class="terms-footer">最後更新：2025年12月</p>
</div>` + termsStyles;

const translations = {
    en: {
        welcomeMessage: "Welcome to TP External Refer A Friend Program",
        pageLangLabel: "Choose Your Language:",
        yourInfoTitle: "Your Information",
        friendInfoTitle: "Friend's Information",
        fullNameLabel: "Full Name:",
        fullNamePlaceholder: "Enter your full name",
        fullNameError: "Please provide your full name.",
        phoneLabel: "Phone Number:",
        phonePlaceholder: "Enter your phone number (01XXXXXXXX)",
        phoneError: "Please provide a valid phone number.",
        phoneHint: "Your phone number must be linked to TnG eWallet for the payment process",
        emailLabel: "Email Address:",
        emailPlaceholder: "Enter your email address",
        emailError: "Please provide a valid email address.",
        jobLangLabel: "Job Language:",
        jobLangError: "Please select a job language.",
        locationLabel: "Working Location:",
        locationError: "Please select a location.",
        selectOption: "Select an option",
        consentText1: "I agree to the",
        termsLink: "terms and conditions",
        consentText2: "of the Refer a Friend program. I confirm that I have obtained my friend's consent to share their information with TP (Teleperformance Malaysia Sdn Bhd.) for recruitment purposes.",
        consentError: "You must agree to the terms and conditions.",
        nextBtn: "Submit Referral",
        thankYouTitle: "Thank you for your referral!",
        referralMessage: "Here's the personalized link for your friend to apply:",
        scanText: "Or scan this QR code to apply",
        followUs: "Follow Us On:",
        followMalaysia: "TP Malaysia:",
        followThailand: "TP Thailand:",
        backText: "Back",
        copyText: "Copy",
        whatsappText: "WhatsApp",
        lineText: "Line",
        facebookText: "Facebook",
        locationSocial: "Our Social Media:",
        shareMessage: "Check out this job opportunity at TP (Teleperformance Malaysia Sdn Bhd.): ",
        termsTitle: "Terms and Conditions",
        closeBtn: "Close",
        copiedText: "Copied!",
        dashboardText: "Dashboard",
        clickHereText: "TP RAF",
        tpGlobal: "TP Global",
        noJobError: "No job found for the selected criteria",
        jobPortalText: "TP Job Portal",
        loadError: "Failed to load job data. Please try again later.",
        termsContent: termsContentEN
    },
    ja: {
        welcomeMessage: "TP外部友人紹介プログラムへようこそ",
        pageLangLabel: "言語を選択してください:",
        yourInfoTitle: "あなたの情報",
        friendInfoTitle: "友人情報",
        fullNameLabel: "氏名:",
        fullNamePlaceholder: "氏名を入力してください",
        fullNameError: "氏名を入力してください。",
        phoneLabel: "電話番号:",
        phonePlaceholder: "電話番号を入力してください (01XXXXXXXX)",
        phoneError: "有効な電話番号を入力してください。",
        phoneHint: "支払いのため、電話番号はTnG eWalletに連携されている必要があります",
        emailLabel: "メールアドレス:",
        emailPlaceholder: "メールアドレスを入力してください",
        emailError: "有効なメールアドレスを入力してください。",
        jobLangLabel: "職務言語:",
        jobLangError: "職務言語を選択してください。",
        locationLabel: "勤務地:",
        locationError: "勤務地を選択してください。",
        selectOption: "選択してください",
        consentText1: "私はTP (Teleperformance Malaysia Sdn Bhd.)の",
        termsLink: "利用規約",
        consentText2: "「友人紹介」プログラムに同意します。採用目的で友人の情報をTPと共有することについて、友人の同意を得たことを確認します。",
        consentError: "利用規約に同意する必要があります。",
        nextBtn: "紹介を送信",
        thankYouTitle: "ご紹介ありがとうございます!",
        referralMessage: "友達が応募するためのリンクです:",
        scanText: "QRコードをスキャンして応募",
        followUs: "フォローしてください:",
        followMalaysia: "TP Malaysia:",
        followThailand: "TP Thailand:",
        backText: "戻る",
        copyText: "コピー",
        whatsappText: "WhatsApp",
        lineText: "Line",
        facebookText: "Facebook",
        locationSocial: "ソーシャルメディア:",
        shareMessage: "TPのこの求人情報をチェックしてください: ",
        termsTitle: "利用規約",
        closeBtn: "閉じる",
        copiedText: "コピーしました!",
        dashboardText: "ダッシュボード",
        clickHereText: "TP RAF",
        tpGlobal: "TP Global",
        noJobError: "選択した条件に該当する仕事が見つかりません",
        jobPortalText: "TP Job Portal",
        loadError: "仕事のデータの読み込みに失敗しました。後ほど再度お試しください。",
        termsContent: termsContentJA
    },
    ko: {
        welcomeMessage: "TP 외부 친구 추천 프로그램에 오신 것을 환영합니다",
        pageLangLabel: "언어 선택:",
        yourInfoTitle: "귀하의 정보",
        friendInfoTitle: "친구 정보",
        fullNameLabel: "성명:",
        fullNamePlaceholder: "성명을 입력하세요",
        fullNameError: "성명을 입력해 주세요.",
        phoneLabel: "전화번호:",
        phonePlaceholder: "전화번호를 입력하세요 (01XXXXXXXX)",
        phoneError: "유효한 전화번호를 입력해 주세요.",
        phoneHint: "지급을 위해 전화번호는 TnG eWallet에 연결되어 있어야 합니다",
        emailLabel: "이메일 주소:",
        emailPlaceholder: "이메일 주소를 입력하세요",
        emailError: "유효한 이메일 주소를 입력해 주세요.",
        jobLangLabel: "직무 언어:",
        jobLangError: "직무 언어를 선택해 주세요.",
        locationLabel: "근무 위치:",
        locationError: "근무 위치를 선택해 주세요.",
        selectOption: "선택하세요",
        consentText1: "나는 TP의",
        termsLink: "이용 약관",
        consentText2: "에 동의합니다. 채용 목적으로 친구의 정보를 TP와 공유하는 것에 대해 친구의 동의를 얻었음을 확인합니다.",
        consentError: "이용 약관에 동의해야 합니다.",
        nextBtn: "추천 제출",
        thankYouTitle: "추천해 주셔서 감사합니다!",
        referralMessage: "친구가 지원할 수 있는 링크입니다:",
        scanText: "QR 코드를 스캔하여 지원하세요",
        followUs: "팔로우 하세요:",
        followMalaysia: "TP Malaysia:",
        followThailand: "TP Thailand:",
        backText: "뒤로",
        copyText: "복사",
        whatsappText: "WhatsApp",
        lineText: "Line",
        facebookText: "Facebook",
        locationSocial: "소셜 미디어:",
        shareMessage: "TP의 이 채용 기회를 확인하세요: ",
        termsTitle: "이용 약관",
        closeBtn: "닫기",
        copiedText: "복사되었습니다!",
        dashboardText: "대시보드",
        clickHereText: "TP RAF",
        tpGlobal: "TP Global",
        noJobError: "선택한 기준에 맞는 직업을 찾을 수 없습니다",
        jobPortalText: "TP Job Portal",
        loadError: "작업 데이터를 로드하지 못했습니다.",
        termsContent: termsContentKO
    },
    "zh-CN": {
        welcomeMessage: "欢迎来到TP外部推荐朋友计划",
        pageLangLabel: "选择您的语言:",
        yourInfoTitle: "您的信息",
        friendInfoTitle: "朋友信息",
        fullNameLabel: "全名:",
        fullNamePlaceholder: "输入您的全名",
        fullNameError: "请提供您的全名。",
        phoneLabel: "电话号码:",
        phonePlaceholder: "输入您的电话号码 (01XXXXXXXX)",
        phoneError: "请输入有效的电话号码。",
        phoneHint: "您的电话号码必须链接到TnG eWallet以进行支付流程",
        emailLabel: "电子邮件地址:",
        emailPlaceholder: "输入您的电子邮件地址",
        emailError: "请输入有效的电子邮件地址。",
        jobLangLabel: "工作语言:",
        jobLangError: "请选择工作语言。",
        locationLabel: "工作地点:",
        locationError: "请选择工作地点。",
        selectOption: "选择选项",
        consentText1: "我同意",
        termsLink: "条款和条件",
        consentText2: "的推荐朋友计划。我确认已获得朋友的同意，将其信息分享给TP用于招聘目的。",
        consentError: "您必须同意条款和条件。",
        nextBtn: "提交推荐",
        thankYouTitle: "感谢您的推荐!",
        referralMessage: "这是您朋友申请的链接:",
        scanText: "扫描二维码申请",
        followUs: "关注我们:",
        followMalaysia: "TP Malaysia:",
        followThailand: "TP Thailand:",
        backText: "返回",
        copyText: "复制",
        whatsappText: "WhatsApp",
        lineText: "Line",
        facebookText: "Facebook",
        locationSocial: "社交媒体:",
        shareMessage: "查看TP的这个工作机会: ",
        termsTitle: "条款和条件",
        closeBtn: "关闭",
        copiedText: "已复制!",
        dashboardText: "仪表板",
        clickHereText: "TP RAF",
        tpGlobal: "TP Global",
        noJobError: "找不到符合所选条件的工作",
        jobPortalText: "TP Job Portal",
        loadError: "无法加载工作数据。请稍后再试。",
        termsContent: termsContentZHCN
    },
    "zh-HK": {
        welcomeMessage: "歡迎來到TP外部推薦朋友計劃",
        pageLangLabel: "選擇您的語言:",
        yourInfoTitle: "您的信息",
        friendInfoTitle: "朋友信息",
        fullNameLabel: "全名:",
        fullNamePlaceholder: "輸入您的全名",
        fullNameError: "請提供您的全名。",
        phoneLabel: "電話號碼:",
        phonePlaceholder: "輸入您的電話號碼 (01XXXXXXXX)",
        phoneError: "請輸入有效的電話號碼。",
        phoneHint: "您的電話號碼必須連結到TnG eWallet以進行支付流程",
        emailLabel: "電郵地址:",
        emailPlaceholder: "輸入您的電郵地址",
        emailError: "請輸入有效的電郵地址。",
        jobLangLabel: "工作語言:",
        jobLangError: "請選擇工作語言。",
        locationLabel: "工作地點:",
        locationError: "請選擇工作地點。",
        selectOption: "選擇選項",
        consentText1: "我同意",
        termsLink: "條款和條件",
        consentText2: "的推薦朋友計劃。我確認已獲得朋友的同意，將其資料分享予TP作招聘用途。",
        consentError: "你必須同意條款和條件。",
        nextBtn: "提交推薦",
        thankYouTitle: "多謝你的推薦!",
        referralMessage: "呢個係你朋友用嚟申請嘅連結:",
        scanText: "掃描二維碼申請",
        followUs: "關注我們:",
        followMalaysia: "TP Malaysia:",
        followThailand: "TP Thailand:",
        backText: "返回",
        copyText: "複製",
        whatsappText: "WhatsApp",
        lineText: "Line",
        facebookText: "Facebook",
        locationSocial: "社交媒體:",
        shareMessage: "睇下TP呢個工作機會: ",
        termsTitle: "條款和條件",
        closeBtn: "關閉",
        copiedText: "已複製!",
        dashboardText: "儀表板",
        clickHereText: "TP RAF",
        tpGlobal: "TP Global",
        noJobError: "找不到符合所選條件的工作",
        jobPortalText: "TP Job Portal",
        loadError: "無法加載工作數據。請稍後再試。",
        termsContent: termsContentZHHK
    }
};

const locationSocialLinks = {
    malaysia: [
        { url: "http://www.facebook.com/TPinMalaysia/", icon: "facebook", name: "Facebook" },
        { url: "http://www.instagram.com/tp_malaysia/", icon: "instagram", name: "Instagram" }
    ],
    thailand: [
        { url: "http://www.facebook.com/TPinThailand/", icon: "facebook", name: "Facebook" },
        { url: "http://www.instagram.com/tpinthailand/", icon: "instagram", name: "Instagram" }
    ],
    global: [
        { url: "https://www.linkedin.com/company/teleperformance", icon: "linkedin", name: "LinkedIn" },
        { url: "https://www.youtube.com/@TeleperformanceGroup", icon: "youtube", name: "YouTube" },
        { url: "https://www.tiktok.com/@teleperformance_group", icon: "tiktok", name: "TikTok" }
    ]
};
