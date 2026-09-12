import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  Sparkles
} from "lucide-react";
import { invitation } from "./data/invitation";
import {
  GaneshEmblem,
  TopToranaGarland,
  ToranaDecor,
  WelcomeSoftSitaRama,
  GopuramLandscapeHero,
  SitaRamaProcession
} from "./components/TempleArt";
import {
  BrideView,
  GroomView,
  HoldingHandsView
} from "./components/CoupleArt";
import Countdown from "./components/Countdown";
import Petals from "./components/Petals";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Audio Handler
  const startAudio = async () => {
    if (!audioRef.current || playing) return;
    try {
      audioRef.current.volume = 0;
      await audioRef.current.play();
      setPlaying(true);
      gsap.to(audioRef.current, { volume: 0.4, duration: 2 });
    } catch {
      // Browser prevented audio — user must click
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (playing) {
      gsap.to(audioRef.current, {
        volume: 0,
        duration: 0.8,
        onComplete: () => {
          audioRef.current.pause();
          setPlaying(false);
        }
      });
    } else {
      audioRef.current.volume = 0;
      try {
        await audioRef.current.play();
        setPlaying(true);
        gsap.to(audioRef.current, { volume: 0.4, duration: 1.5 });
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  // Try autoplay immediately on mount
  useEffect(() => {
    startAudio();
  }, []);

  // Fallback: play on first user interaction if autoplay was blocked
  useEffect(() => {
    if (playing) return; // already playing
    const handleFirstInteraction = () => {
      startAudio();
    };
    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [playing]);

  // GSAP Cinematic Storyline Animations (Butter-Smooth 60FPS Continuous Scrubbing)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INITIAL INVOCATION SCENE
      gsap.to(".intro-card", {
        scale: 0.94,
        opacity: 0,
        y: -40,
        scrollTrigger: {
          trigger: ".scene-intro",
          start: "top top",
          end: "+=85%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1
        }
      });

      // 2. GOPURAM LANDSCAPE WITH GROOM & BRIDE NAMES (WEDS)
      const gopuramTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scene-gopuram-hero",
          start: "top top",
          end: "+=120%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1
        }
      });
      gopuramTl
        .fromTo(
          ".gopuram-hero-img",
          { scale: 1.15, filter: "brightness(0.65)" },
          { scale: 1.02, filter: "brightness(0.95)", duration: 1.8 }
        )
        .fromTo(
          ".hero-groom-name",
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          "-=1.4"
        )
        .fromTo(
          ".hero-weds-badge",
          { scale: 0.4, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 },
          "-=0.9"
        )
        .fromTo(
          ".hero-bride-name",
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          "-=0.9"
        )
        .fromTo(
          ".temple-kicker",
          { y: -25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=1"
        )
        .to(".gopuram-hero-content", { opacity: 0.2, y: -25, duration: 0.8, delay: 0.3 });

      // 3. DATE REVEAL: TOP & BOTTOM IMAGES, SIDE ELEPHANTS, FADING CONTENT
      const dateTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scene-date-reveal",
          start: "top top",
          end: "+=100%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1
        }
      });
      dateTl
        // Top Sita-Rama blessing enters gracefully
        .fromTo(
          ".sitarama-art-box",
          { y: -70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
        )
        // Bottom Dollu-Sanayi procession enters gracefully
        .fromTo(
          ".procession-dollu-box",
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power1.out" },
          "<"
        )
        // Left royal elephant marches in from left
        .fromTo(
          ".elephant-left-box",
          { x: "-32vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1, ease: "power1.out" },
          "<"
        )
        // Right royal elephant marches in from right
        .fromTo(
          ".elephant-right-box",
          { x: "32vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1, ease: "power1.out" },
          "<"
        )
        // Center Muhurtham Date Card blossoms into full clarity
        .fromTo(
          ".wedding-date-card",
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power1.out" },
          "-=0.6"
        );

      // 4. BRIDE & GROOM COME FROM SIDEWAYS WITH NAMES
      const coupleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scene-couple-intro",
          start: "top top",
          end: "+=100%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1
        }
      });
      coupleTl
        .fromTo(
          ".bride-character-col",
          { x: "-32vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1, ease: "power1.out" }
        )
        .fromTo(
          ".groom-character-col",
          { x: "32vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 1, ease: "power1.out" },
          "<"
        )
        .fromTo(
          ".couple-intro-card",
          { opacity: 0, scale: 0.88, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power1.out" },
          "-=0.6"
        );

      // 5. HOLDING HANDS WITH SCROLL-OUT ZOOM IN & FADE OUT EFFECT
      const handsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scene-holding-hands",
          start: "top top",
          end: "+=130%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1
        }
      });
      handsTl
        // 1. Entrance: Image and poetic quote card smoothly fade into center
        .fromTo(
          ".holding-image-box",
          { scale: 0.9, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power1.out" }
        )
        .fromTo(
          ".walk-copy-card",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power1.out" },
          "-=0.6"
        )
        // 2. Scroll-out cinematic effect: image zooms in and fades out into venue!
        .to(".holding-hands-img", {
          scale: 2.4,
          opacity: 0,
          transformOrigin: "50% 55%",
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(
          ".walk-copy-card",
          {
            scale: 1.08,
            opacity: 0,
            y: -20,
            duration: 1.2,
            ease: "power2.inOut"
          },
          "<"
        )
        .to(
          ".holding-ambient-glow",
          {
            scale: 2,
            opacity: 0,
            duration: 1.2
          },
          "<"
        );

      // 6. LOCATION / VENUE REVEAL SCENE
      const venueTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scene-venue",
          start: "top top",
          end: "+=110%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1
        }
      });
      venueTl
        .fromTo(
          ".venue-card-main",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 }
        )
        .fromTo(
          ".family-card-main",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          "<"
        );

      // 7. COUNTDOWN WITH SPECIAL EFFECTS
      gsap.fromTo(
        ".countdown-inner-wrapper",
        { y: 50, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".scene-countdown",
            start: "top 75%",
            end: "center center",
            scrub: 0.6
          }
        }
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={appRef} className="wedding-app">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/assets/audio/Neeli.mp3"
        loop
        preload="auto"
      />

      {/* Floating Music Controller */}
      <button
        className="music-fab"
        onClick={toggleMusic}
        aria-label="Toggle music"
      >
        <img
          src="/assets/music.png"
          alt="Music"
          className={`music-fab-img ${playing ? "swinging" : ""}`}
        />
        {playing && (
          <>
            <span className="mn mn1">♪</span>
            <span className="mn mn2">♫</span>
            <span className="mn mn3">♬</span>
            <span className="mn mn4">♪</span>
            <span className="mn mn5">♩</span>
          </>
        )}
        {!playing && <span className="play-dot">▶</span>}
      </button>

      {/* SECTION 1: AUSPICIOUS INVOCATION & GANESHA OPENING */}
      <section className="scene scene-intro">
        <div className="scene-bg bg-intro" />
        <ToranaDecor />
        <div className="floating-diya diya-tl">🪔</div>
        <div className="floating-diya diya-tr">🪔</div>
        <div className="floating-diya diya-bl">🪔</div>
        <div className="floating-diya diya-br">🪔</div>

        <div className="intro-card ornate-card">
          <GaneshEmblem />
          <div className="ganesh-chant">{invitation.ganeshInvocation}</div>
          <div className="invocation-text">{invitation.invocation}</div>
          <div className="ornate-divider">✦ ───────── ❖ ───────── ✦</div>

          <h1 className="main-title">{invitation.title}</h1>
          <p className="main-subtitle">{invitation.subtitle}</p>

          <p className="sacred-sloka">{invitation.sloka}</p>

          <div className="grandparents-blessing">
            <p>{invitation.paternalGrandparents}</p>
            <p>{invitation.maternalGrandparents}</p>
          </div>

          <WelcomeSoftSitaRama />
        </div>
      </section>

      {/* SECTION 2: GOPURAM LANDSCAPE HERO WITH GROOM & BRIDE NAMES (WEDS) */}
      <section className="scene scene-gopuram-hero">
        <GopuramLandscapeHero />
      </section>

      {/* SECTION 3: WEDDING DATE REVEAL WITH SITA-RAMA, ELEPHANTS & DOLLU-SANAYI */}
      <section className="scene scene-date-reveal">
        <div className="scene-bg bg-spiritual" />
        <TopToranaGarland />
        <Petals count={16} className="petals-subtle" />
        <SitaRamaProcession />
      </section>

      {/* SECTION 4: BRIDE & GROOM COME FROM SIDEWAYS WITH NAMES */}
      <section className="scene scene-couple-intro">
        <div className="scene-bg bg-couple" />
        <TopToranaGarland />
        <Petals count={12} className="petals-subtle" />
        <div className="couple-stage-split">
          <div className="couple-character-col bride-character-col">
            <BrideView />
            <div className="character-details-card ornate-card">
              <span className="char-role">వధువు</span>
              <h3>
                {invitation.bridePrefix} {invitation.bride}
              </h3>
              <p className="parents-info">
                <strong>తల్లిదండ్రులు:</strong>
                <br />
                {invitation.brideParents}
              </p>
            </div>
          </div>

          <div className="couple-intro-card ornate-card">
            <div className="ornament-pair">✦ ❖ ✦</div>
            <h2>రెండు మనసుల కలయిక</h2>
            <p>{invitation.inviteDetails}</p>
          </div>

          <div className="couple-character-col groom-character-col">
            <GroomView />
            <div className="character-details-card ornate-card">
              <span className="char-role">వరుడు</span>
              <h3>
                {invitation.groomPrefix} {invitation.groom}
              </h3>
              <p className="parents-info">
                <strong>తల్లిదండ్రులు:</strong>
                <br />
                {invitation.groomParents}
              </p>
              <p className="native-info">{invitation.groomNative}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOLDING HANDS (ZOOM IN ON SCROLL-OUT) */}
      <section className="scene scene-holding-hands">
        <div className="scene-bg bg-walk" />
        <TopToranaGarland />
        <Petals count={14} className="petals-subtle" />
        <div className="holding-hands-stage">
          <HoldingHandsView />
          <div className="walk-copy-card ornate-card">
            <div className="ornament-line">✤ ───────── ✤</div>
            <h2>చేయి చేయి కలిపి…</h2>
            <p className="walk-quote">
              "సప్తపది అడుగులతో, జీవితాంతం తోడై నీడై నడిచే పవిత్ర ప్రయాణం"
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: LOCATION / VENUE REVEAL */}
      <section className="scene scene-venue">
        <div className="scene-bg bg-venue" />
        <TopToranaGarland />
        <div className="venue-grid-container">
          <div className="venue-card-main ornate-card">
            <span className="section-tag">
              <MapPin size={18} /> కళ్యాణ వేదిక & విందు
            </span>
            <h2>{invitation.venueTitle}</h2>
            <p className="venue-address">{invitation.venue}</p>
            <div className="dinner-badge">{invitation.dinner}</div>
            
            {/* Embedded Google Maps with precise venue pin marking */}
            <div className="venue-map-embed-wrapper">
              <iframe
                title="క్షత్రియ సేవా సమితి భద్రాచలం కళ్యాణ వేదిక గూగుల్ మ్యాప్స్"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s17.668769,80.886372!6i16!3m1!1ste!5m1!1ste"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="venue-map-iframe"
              />
            </div>

            <a
              href={invitation.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="map-action-button"
            >
              <Navigation size={18} />
              <span>గూగుల్ మ్యాప్స్‌లో దారి చూడండి</span>
            </a>
          </div>

          <div className="family-card-main ornate-card">
            <span className="section-tag">ఆహ్వానించువారు & భవదీయులు</span>
            <div className="family-section">
              <span className="sub-tag">భవదీయులు:</span>
              <p className="highlight-family">{invitation.bhavadheyulu}</p>
            </div>
            <div className="family-section">
              <span className="sub-tag">ఆహ్వానించువారు:</span>
              <p className="highlight-family">{invitation.inviters}</p>
              <p className="org-text">{invitation.invitersOrg}</p>
            </div>
            <div className="phones-row">
              <Phone size={16} />
              {invitation.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="phone-link">
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: COUNTDOWN WITH SPECIAL EFFECTS */}
      <section className="scene scene-countdown">
        <div className="scene-bg bg-countdown" />
        <TopToranaGarland />
        <div className="countdown-inner-wrapper">
          <div className="countdown-header-ornament">
            <Sparkles size={20} className="sparkle-icon" />
            <span>మంగళ ఘడియల కోసం ఎదురుచూపులు</span>
            <Sparkles size={20} className="sparkle-icon" />
          </div>
          <h2 className="countdown-main-heading">శుభ ముహూర్త సమయం</h2>
          <Countdown />
          <div className="countdown-target-pill">
            <Clock size={18} />
            <span>14 అక్టోబర్ 2026 • బుధవారం ఉదయం గం॥ 8:59 ని॥లకు</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL THANK YOU NOTE */}
      <footer className="scene-closing">
        <div className="closing-arch-glow" />
        <div className="closing-card ornate-card">
          <div className="closing-om">ॐ</div>
          <h2>హృదయపూర్వక ధన్యవాదములు</h2>
          <p className="closing-blessing">
            మీ పవిత్ర సమక్షం, శుభాశీస్సులు నూతన వధూవరులకు శ్రీరామరక్ష!
          </p>

          <div className="brother-special-note">
            <div className="quote-mark">“</div>
            <p>{invitation.brotherNote}</p>
          </div>

          <div className="ornate-divider">✦ ───────── ❖ ───────── ✦</div>
          <p className="copyright-note">
            గోళ్ళమూడి & మన్నవ కుటుంబ సభ్యులు • భద్రాచలం
          </p>
        </div>
      </footer>
    </main>
  );
}
