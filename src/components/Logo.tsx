import Image from 'next/image';

export default function Logo({ className = "", size = 80 }) {
  return (
    <div className={className}>
      <Image
        src="/images/logo.png"
        alt="Tarihi Taş Mekan Logo"
        width={size}
        height={size}
        priority
        className="rounded-full"
      />
    </div>
  );
} 