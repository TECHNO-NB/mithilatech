// @ts-nocheck
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function SocialFacebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M14 8.5h2V5.5h-2c-1.93 0-3.5 1.57-3.5 3.5v2H8.5v3H10.5v7h3v-7h2l.5-3H13.5V9c0-.28.22-.5.5-.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function SocialInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialLinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <line x1="8" y1="10.5" x2="8" y2="16" />
      <circle cx="8" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M12 16v-3.2c0-1.1.9-2 2-2s2 .9 2 2V16" strokeLinecap="round" />
    </svg>
  );
}

export function SocialYoutube(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3.5" />
      <path d="M10.5 9.7v4.6l4-2.3-4-2.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}



export function SocialTikTok(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5c.17 0 .34.01.5.04"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4c.4 2.2 1.9 3.8 4 4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SocialWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        d="M20 11.9a8 8 0 0 1-11.9 7L4 20l1.1-4.1A8 8 0 1 1 20 11.9Z"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3-.1.5.3.6 1.2 1.5 1.8 1.8.2.1.4 0 .5-.1l.5-.4c.1-.1.3-.2.5-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.3-1 .4-1.6.3-1.9-.4-4.3-2.8-4.7-4.7-.1-.6 0-1.2.3-1.6Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}