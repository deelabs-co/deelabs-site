import Script from "next/script";

/**
 * Env-gated analytics. Tags render ONLY when the env var is non-empty.
 * Repo ships with both empty — no live IDs, no Facebook pixel (per Mission).
 */
export default function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const linkedinId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <>
      {gtmId ? (
        <>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="GTM"
            />
          </noscript>
        </>
      ) : null}
      {linkedinId ? (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`window._linkedin_partner_id="${linkedinId}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(window._linkedin_partner_id);`}
        </Script>
      ) : null}
    </>
  );
}
