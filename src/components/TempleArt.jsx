import React from "react";
import { invitation } from "../data/invitation";

export function GaneshEmblem() {
  return (
    <div className="ganesh-wrapper" aria-label="Lord Ganesha">
      <div className="ganesh-halo-glow" />
      <div className="ganesh-transparent-box">
        <img
          src="/assets/spiritual/lord-ganesh.png"
          alt="Lord Ganesha"
          className="ganesh-transparent-img"
          loading="eager"
        />
      </div>
    </div>
  );
}

export function TopToranaGarland() {
  return (
    <div className="top-torana-garland-strip" aria-hidden="true">
      <div className="top-torana-repeat-bg" />
    </div>
  );
}

export function ToranaDecor() {
  return (
    <div className="torana-decor-wrapper" aria-hidden="true">
      <picture className="torana-picture">
        <source
          media="(max-width: 860px)"
          srcSet="/assets/temple/torana.png"
        />
        <img
          src="/assets/temple/torana-landscape.png"
          alt="Traditional Wedding Torana Decor"
          className="torana-initial-bg-img"
          loading="eager"
        />
      </picture>
    </div>
  );
}

export function WelcomeSoftSitaRama() {
  return (
    <div className="welcome-soft-sitarama-box" aria-label="Sri Sita Rama Blessings">
      <div className="soft-sitarama-aura" />
      <img
        src="/assets/spiritual/soft-sita-rama.png"
        alt="Sri Sita Rama Talambralu"
        className="welcome-soft-sitarama-img"
        loading="eager"
      />
    </div>
  );
}

export function GopuramLandscapeHero() {
  return (
    <div className="gopuram-landscape-hero" aria-label="Gopuram Landscape Hero">
      <div className="gopuram-hero-bg">
        <img
          src="/assets/temple/gopuram-landscape.jpg"
          alt="Bhadrachalam Temple Landscape"
          className="gopuram-hero-img"
          loading="eager"
        />
        <div className="gopuram-hero-overlay" />
      </div>

      <div className="gopuram-hero-content">
        <div className="temple-kicker">శ్రీ సీతారామచంద్ర స్వామి దివ్య క్షేత్ర సన్నిధిలో</div>
        <div className="hero-couple-weds-box ornate-card">
          <div className="hero-groom-name">
            <span className="hero-prefix">{invitation.groomPrefix}</span>
            <span className="hero-name">{invitation.groom}</span>
          </div>

          <div className="hero-weds-badge">
            <div className="weds-line" />
            <span className="weds-text">వివాహము</span>
            <div className="weds-line" />
          </div>

          <div className="hero-bride-name">
            <span className="hero-prefix">{invitation.bridePrefix}</span>
            <span className="hero-name">{invitation.bride}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SitaRamaProcession() {
  return (
    <div className="sitarama-procession-container" aria-label="Sita Rama Kalyanam & Traditional Procession">
      <div className="sitarama-divine-aura" />

      {/* Sita Rama Kalyanam Artwork at top */}
      <div className="sitarama-art-box">
        <img
          src="/assets/sita-rama.png"
          alt="Sri Sita Rama Kalyanam"
          className="sitarama-bapu-img"
          loading="eager"
        />
      </div>

      {/* Elephants on respective sides with fading date card in center */}
      <div className="elephants-date-stage">
        <div className="elephant-side elephant-left-box">
          <img
            src="/assets/elephant-left.png"
            alt="Royal Elephant Left"
            className="elephant-img"
            loading="eager"
          />
        </div>

        <div className="wedding-date-card ornate-card">
          <div className="date-top-flourish">𑁍 ❖ 𑁍</div>
          <span className="section-tag">వివాహ మహోత్సవ శుభ ముహూర్తం</span>
          <h2 className="date-heading">14 అక్టోబర్ 2026</h2>
          <div className="muhurtham-time-pill">
            <span>బుధవారం ఉదయం గం॥ 8:59 ని॥లకు</span>
          </div>
          <div className="lagnam-box">
            <p>స్వస్తిశ్రీ పరాభవ నామ సం॥ర ఆశ్వయుజ శు॥ తదియ</p>
            <p>అనురాధ నక్షత్రయుక్త వృశ్చిక లగ్న పుష్కరాంశ సుముహూర్తమున</p>
          </div>
        </div>

        <div className="elephant-side elephant-right-box">
          <img
            src="/assets/elephant-right.png"
            alt="Royal Elephant Right"
            className="elephant-img"
            loading="eager"
          />
        </div>
      </div>

      {/* Traditional Dollu Sanayi Procession at the bottom */}
      <div className="procession-dollu-box">
        <img
          src="/assets/dollu-sanayi.png"
          alt="Traditional Mangala Vadyalu & Procession"
          className="dollu-sanayi-img"
          loading="eager"
        />
        <div className="procession-caption">
          మంగళ వాయిద్యాలు • సన్నాయి డోలు నాదాలతో శుభ పరిణయం
        </div>
      </div>
    </div>
  );
}
