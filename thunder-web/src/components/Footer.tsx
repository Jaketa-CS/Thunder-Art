import { siteConfig } from '@/data/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto pt-12 md:pt-16">
      {/* Simple Layered Light Snowy Mountains SVG */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-px w-full overflow-hidden leading-none select-none"
      >
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block h-20 w-full sm:h-28 md:h-36"
        >
          <defs>
            {/* Distant ridge fades smoothly toward midground */}
            <linearGradient
              id="mtn-far"
              x1="0"
              y1="20"
              x2="0"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#b8d0eb" />
              <stop offset="100%" stopColor="#dce9f7" />
            </linearGradient>
            {/* Midground ridge fades smoothly into foreground snow */}
            <linearGradient
              id="mtn-mid"
              x1="0"
              y1="35"
              x2="0"
              y2="155"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#d3e4f6" />
              <stop offset="85%" stopColor="#eaf3fb" />
              <stop offset="100%" stopColor="#f0f6fc" />
            </linearGradient>
            {/* Shadow facets fade completely into #f0f6fc before the bottom edge, so there is zero seam */}
            <linearGradient
              id="mtn-shadow"
              x1="0"
              y1="50"
              x2="0"
              y2="152"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#dce9f6" />
              <stop offset="75%" stopColor="#eaf2fa" />
              <stop offset="100%" stopColor="#f0f6fc" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Distant icy ridge */}
          <polygon
            points="0,160 0,95 160,34 330,100 520,20 720,94 930,26 1140,96 1310,38 1440,86 1440,160"
            fill="url(#mtn-far)"
          />
          {/* Midground glacial peaks */}
          <polygon
            points="0,160 0,110 110,64 260,114 430,40 620,112 820,36 1020,110 1210,48 1360,102 1440,74 1440,160"
            fill="url(#mtn-mid)"
          />
          {/* Foreground bright snow peaks seamlessly matching the #f0f6fc footer top */}
          <polygon
            points="0,160 0,120 190,58 370,122 570,50 760,124 960,54 1150,120 1320,68 1440,112 1440,160"
            fill="#f0f6fc"
          />
          {/* Soft snow-shadow facets that taper and fade to 0 opacity before the base */}
          <polygon points="190,58 295,152 185,152" fill="url(#mtn-shadow)" />
          <polygon points="570,50 690,152 560,152" fill="url(#mtn-shadow)" />
          <polygon points="960,54 1080,152 950,152" fill="url(#mtn-shadow)" />
          <polygon points="1320,68 1420,152 1310,152" fill="url(#mtn-shadow)" />
        </svg>
      </div>

      {/* Snowy Base Section with Socials & Copyright */}
      <div className="bg-gradient-to-b from-[#f0f6fc] via-[#e8f1fa] to-[#dceaf7] px-8 pt-4 pb-10 md:pt-6 md:pb-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              {
                name: 'Bluesky',
                url: siteConfig.socials.bluesky,
                color: '#0085ff',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
                  </svg>
                ),
              },
              {
                name: 'X (Twitter)',
                url: siteConfig.socials.twitter,
                color: '#0f172a',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                ),
              },
              {
                name: 'FurAffinity',
                url: siteConfig.socials.furaffinity,
                color: '#e08600',
                icon: (
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'currentColor',
                      maskImage: 'url("/fa-logo-old.png")',
                      WebkitMaskImage: 'url("/fa-logo-old.png")',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                    }}
                  />
                ),
              },
              {
                name: 'Instagram',
                url: siteConfig.socials.instagram,
                color: '#E1306C',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003h-.001ZM8 3.892A4.108 4.108 0 0 1 12.108 8 4.108 4.108 0 0 1 8 12.108 4.108 4.108 0 0 1 3.892 8 4.108 4.108 0 0 1 8 3.892Zm0 6.675A2.567 2.567 0 1 0 5.433 8 2.567 2.567 0 0 0 8 10.567Zm4.237-6.953a1.025 1.025 0 1 0 0 2.05 1.025 1.025 0 0 0 0-2.05Z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} Profile`}
                className="flex items-center rounded-full bg-[#1e293b]/[0.06] p-2.5 text-[#334155] transition-all duration-300 ease-out"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.transform =
                    'translateY(-3px) scale(1.1)';
                  e.currentTarget.style.background = `color-mix(in srgb, ${social.color}, white 85%)`;
                  e.currentTarget.style.boxShadow = `0 4px 12px color-mix(in srgb, ${social.color}, transparent 70%)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#334155';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(30, 41, 59, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm font-medium text-[#475569]">
            <p className="m-0">
              &copy; {currentYear} ThunderFennec. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
