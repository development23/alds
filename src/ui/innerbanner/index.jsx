import Image from "next/image";

export default function InnerBanner({ src, alt }) {
  return (
    <Image
      src={src}
      layout="responsive"
      objectFit="cover"
      alt="Mahatma Gandhi Hospital"
    />
  );
}
