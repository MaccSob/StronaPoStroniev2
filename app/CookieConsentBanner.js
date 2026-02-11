'use client'
import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Zgadzam się"
      declineButtonText="Odmawiam"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{ backgroundColor: "oklch(44.8% 0.119 151.328)", color: "#FFF", fontSize: "14px" }}
      declineButtonStyle={{ backgroundColor: "#f44336", color: "#FFF", fontSize: "14px" }}
      expires={365}  // Number of days before the cookie expires
      onAccept={() => {
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        console.log("Cookies declined");
      }}
    >
      Ta strona wykorzystuje pliki cookies. Dalsze korzystanie ze strony oznacza zgodę na ich użycie. 
      Więcej informacji na <a className="text-green-800" href="/policy">Polityka prywatności</a>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
