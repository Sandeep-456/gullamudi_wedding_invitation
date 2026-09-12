import React from "react";

export function BrideView() {
  return (
    <div className="couple-character bride-view" aria-label="Bride Kamala Deekshitha">
      <div className="character-ambient-glow" />
      <div className="character-frame">
        <img
          src="/assets/couple/bride.png"
          alt="Bride Kamala Deekshitha"
          className="couple-img bride-img"
          loading="eager"
        />
      </div>
    </div>
  );
}

export function GroomView() {
  return (
    <div className="couple-character groom-view" aria-label="Groom Praveen Chandra">
      <div className="character-ambient-glow" />
      <div className="character-frame">
        <img
          src="/assets/couple/groom.png"
          alt="Groom Praveen Chandra"
          className="couple-img groom-img"
          loading="eager"
        />
      </div>
    </div>
  );
}

export function ExchangingMalaView() {
  return (
    <div className="varmala-scene-container" aria-label="Garland Exchange Ceremony">
      <div className="varmala-ambient-glow" />
      <div className="varmala-image-box">
        <img
          src="/assets/couple/exchanging-mala.png"
          alt="Couple Exchanging Garlands"
          className="varmala-img"
          loading="eager"
        />
      </div>
    </div>
  );
}

export function HoldingHandsView() {
  return (
    <div className="holding-hands-container" aria-label="Couple Holding Hands">
      <div className="holding-ambient-glow" />
      <div className="holding-image-box">
        <img
          src="/assets/couple/holding-hands.png"
          alt="Couple Holding Hands Walking Together"
          className="holding-hands-img"
          loading="eager"
        />
      </div>
    </div>
  );
}
