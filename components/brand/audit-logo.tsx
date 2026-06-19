import Image from "next/image";

export function AuditLogo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/logo-audit.webp"
      alt="Audit"
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}
