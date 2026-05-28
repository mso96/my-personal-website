export function SoundCloudEmbed() {
  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.02]">
      <iframe
        title="Turkish Cosmic Disco - Paradiso Amsterdam"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay; encrypted-media"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A50459511&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        className="block"
      />
      <div className="overflow-hidden text-ellipsis whitespace-nowrap px-3 pb-3 text-[10px] leading-none text-[#cccccc]">
        <a
          href="https://soundcloud.com/karriem"
          title="Kabus Kerim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cccccc] no-underline"
        >
          Kabus Kerim
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/karriem/turkish-cosmic-disco-paradiso"
          title="Turkish Cosmic Disco - Paradiso Amsterdam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cccccc] no-underline"
        >
          Turkish Cosmic Disco - Paradiso Amsterdam
        </a>
      </div>
    </div>
  );
}
