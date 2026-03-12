"use client";

import Badge from "../Badge";

interface MetricItemProps {
  label: string;
  value: string | number;
  badgeContent?: React.ReactNode;
}

const MetricItem: React.FC<MetricItemProps> = ({
  label,
  value,
  badgeContent,
}) => (
  <div className="flex min-w-0 flex-col gap-2">
    <h4 className="font-utsaha text-lg leading-tight whitespace-nowrap text-white md:text-xl">
      {label}
    </h4>
    {badgeContent ? (
      badgeContent
    ) : (
      <p className="font-utsaha text-2xl leading-tight text-[#95959d] md:text-3xl">
        {value}
      </p>
    )}
  </div>
);

export interface MetricsProps {
  totalEndorsements?: number;
  activeTokens?: number;
  socials?: number;
  badgesEarned?: string;
  className?: string;
}

const Metrics: React.FC<MetricsProps> = ({
  totalEndorsements = 70,
  activeTokens = 14,
  socials = 3,
  badgesEarned = "300+ Trust Received",
  className = "",
}) => {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-card-border bg-card-bg px-6 py-6 md:px-10 md:py-8 ${className}`}
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:gap-x-10 lg:grid-cols-4">
        <MetricItem label="Total Endorsements" value={totalEndorsements} />
        <MetricItem label="Active Tokens" value={activeTokens} />
        <MetricItem label="Socials" value={socials} />
        <MetricItem
          label="Badges Earned"
          badgeContent={
            <div className="flex items-center gap-2.5">
              <Badge rank="gold" size={28} />
              <span className="font-utsaha text-sm text-[#95959d] md:text-base">
                {badgesEarned}
              </span>
            </div>
          }
          value=""
        />
      </div>
    </div>
  );
};

export default Metrics;
