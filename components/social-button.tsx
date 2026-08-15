import { ReactNode } from 'react'
import { KickIcon, TikTokIcon, InstagramIcon } from '@/components/platform-icons'

// ── Platform config ────────────────────────────────────────────────────────
export type SocialPlatform = 'kick' | 'tiktok' | 'instagram'

const platformConfig: Record<SocialPlatform, { label: string; icon: ReactNode }> = {
    kick: { label: 'Kick', icon: <KickIcon /> },
    tiktok: { label: 'TikTok', icon: <TikTokIcon /> },
    instagram: { label: 'Instagram', icon: <InstagramIcon /> },
}

// ── Component ──────────────────────────────────────────────────────────────
interface SocialButtonProps {
    platform: SocialPlatform
    href: string
    /** Override the default platform label */
    label?: string
}

export function SocialButton({ platform, href, label }: SocialButtonProps) {
    const { label: defaultLabel, icon } = platformConfig[platform]

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
        inline-flex items-center gap-2
        px-5 py-2.5 rounded-[6px]
        text-sm font-semibold
        border border-input bg-background text-foreground
        hover:border-primary hover:text-primary
        transition-colors
      "
        >
            <span className="text-secondary">{icon}</span>
            {label ?? defaultLabel}
        </a>
    )
}