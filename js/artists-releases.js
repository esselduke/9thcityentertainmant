// scripts/artists-releases-final.js

// ============================================
// DATA - Updated with real image URLs
// ============================================
const DATA = {
  artists: [
    {
      id: 1,
      name: "K-WAVE",
      slug: "k-wave",
      bio: "Ghanaian-Canadian rapper known for blending Afrobeats rhythms with hard-hitting Hip-Hop bars. K-WAVE emerged from Toronto's vibrant underground scene.",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
      genres: ["Hip-Hop", "Afrobeats"],
      social: {
        instagram: "https://instagram.com/kwaveofficial",
        twitter: "https://twitter.com/kwavemusic",
        spotify: "https://open.spotify.com/artist/kwave"
      }
    },
    {
      id: 2,
      name: "ASHA ROSE",
      slug: "asha-rose",
      bio: "Soulful R&B vocalist with roots in Accra. ASHA ROSE's voice carries the weight of generations, blending traditional melodies with modern production.",
      image: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&q=80",
      genres: ["R&B", "Pop"],
      social: {
        instagram: "https://instagram.com/asharosemusic",
        twitter: "https://twitter.com/asharose",
        spotify: "https://open.spotify.com/artist/asharose"
      }
    },
    {
      id: 3,
      name: "NEXUS",
      slug: "nexus",
      bio: "Electronic producer and sound architect creating futuristic soundscapes. NEXUS pushes boundaries with genre-defying experimental beats.",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
      genres: ["Electronic", "Hip-Hop"],
      social: {
        instagram: "https://instagram.com/nexusbeats",
        twitter: "https://twitter.com/nexusproducer",
        spotify: "https://open.spotify.com/artist/nexus"
      }
    },
    {
      id: 4,
      name: "ZARA KINGS",
      slug: "zara-kings",
      bio: "Afrobeats sensation bringing infectious energy to every track. ZARA KINGS represents the new wave of African artists taking over global charts.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      genres: ["Afrobeats", "Pop"],
      social: {
        instagram: "https://instagram.com/zarakingsmusic",
        twitter: "https://twitter.com/zarakings",
        spotify: "https://open.spotify.com/artist/zarakings"
      }
    },
    {
      id: 5,
      name: "DIESEL",
      slug: "diesel",
      bio: "Raw, unfiltered Hip-Hop artist from Toronto's streets. DIESEL's lyrics paint vivid pictures of urban life with cinematic precision.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      genres: ["Hip-Hop"],
      social: {
        instagram: "https://instagram.com/dieselraps",
        twitter: "https://twitter.com/diesel",
        spotify: "https://open.spotify.com/artist/diesel"
      }
    },
    {
      id: 6,
      name: "LUNA GRACE",
      slug: "luna-grace",
      bio: "Ethereal R&B artist with a voice that transcends genres. LUNA GRACE creates intimate sonic experiences that connect deeply with listeners.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      genres: ["R&B", "Electronic"],
      social: {
        instagram: "https://instagram.com/lunagracemusic",
        twitter: "https://twitter.com/lunagrace",
        spotify: "https://open.spotify.com/artist/lunagrace"
      }
    },
    {
      id: 7,
      name: "PHANTOM PULSE",
      slug: "phantom-pulse",
      bio: "Mysterious electronic producer known for bass-heavy club anthems. PHANTOM PULSE's identity remains hidden, letting the music speak.",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
      genres: ["Electronic"],
      social: {
        instagram: "https://instagram.com/phantompulse",
        twitter: "https://twitter.com/phantompulse",
        spotify: "https://open.spotify.com/artist/phantompulse"
      }
    },
    {
      id: 8,
      name: "ESSENCE",
      slug: "essence",
      bio: "Afrobeats and R&B fusion artist creating transcendent vibes. ESSENCE brings spirituality and sensuality together in perfect harmony.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
      genres: ["Afrobeats", "R&B"],
      social: {
        instagram: "https://instagram.com/essencevibes",
        twitter: "https://twitter.com/essencemusic",
        spotify: "https://open.spotify.com/artist/essence"
      }
    },
    {
      id: 9,
      name: "CRUZ",
      slug: "cruz",
      bio: "Versatile Pop artist with Hip-Hop influences. CRUZ crafts radio-ready hits while maintaining artistic integrity and authentic storytelling.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      genres: ["Pop", "Hip-Hop"],
      social: {
        instagram: "https://instagram.com/cruzofficial",
        twitter: "https://twitter.com/cruzmusic",
        spotify: "https://open.spotify.com/artist/cruz"
      }
    },
    {
      id: 10,
      name: "MAYA SOUL",
      slug: "maya-soul",
      bio: "Neo-soul artist channeling classic vibes through modern production. MAYA SOUL's music feels timeless, bridging decades with grace.",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=800&q=80",
      genres: ["R&B"],
      social: {
        instagram: "https://instagram.com/mayasoulmusic",
        twitter: "https://twitter.com/mayasoul",
        spotify: "https://open.spotify.com/artist/mayasoul"
      }
    }
  ],
  releases: [
    {
      id: 1,
      title: "NORTHSIDE STORIES",
      artistId: 1,
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      date: "2025-03-15",
      type: "Album",
      genre: "Hip-Hop",
      popularity: 95,
      audioPreview: "",
      description: "K-WAVE's debut album chronicles life in Toronto's diverse neighborhoods, blending Afrobeats percussion with classic boom-bap production.",
      tracklist: [
        { number: 1, name: "Intro (The City)", duration: "1:45" },
        { number: 2, name: "Northside Anthem", duration: "3:22" },
        { number: 3, name: "Ghana to the 6ix", duration: "4:01" },
        { number: 4, name: "Midnight Sessions", duration: "3:45" },
        { number: 5, name: "Crown", duration: "3:30" },
        { number: 6, name: "Interlude", duration: "1:12" },
        { number: 7, name: "Never Fold", duration: "3:55" },
        { number: 8, name: "City Lights", duration: "4:10" },
        { number: 9, name: "Legacy", duration: "3:40" },
        { number: 10, name: "Outro (Home)", duration: "2:15" }
      ]
    },
    {
      id: 2,
      title: "Velvet Dreams",
      artistId: 2,
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
      date: "2024-11-20",
      type: "EP",
      genre: "R&B",
      popularity: 88,
      audioPreview: "",
      description: "ASHA ROSE delivers an intimate 6-track EP exploring love, loss, and self-discovery through lush vocal arrangements.",
      tracklist: [
        { number: 1, name: "Velvet Dreams", duration: "3:25" },
        { number: 2, name: "Midnight Confessions", duration: "4:12" },
        { number: 3, name: "Golden Hour", duration: "3:50" },
        { number: 4, name: "Distance", duration: "3:35" },
        { number: 5, name: "Healing", duration: "4:20" },
        { number: 6, name: "New Dawn", duration: "3:45" }
      ]
    },
    {
      id: 3,
      title: "FREQUENCY",
      artistId: 3,
      cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80",
      date: "2025-01-08",
      type: "Single",
      genre: "Electronic",
      popularity: 92,
      audioPreview: "",
      description: "NEXUS drops a mind-bending single featuring glitchy beats, ethereal synths, and hypnotic basslines.",
      tracklist: [
        { number: 1, name: "FREQUENCY", duration: "3:58" }
      ]
    },
    {
      id: 4,
      title: "DANCE FLOOR ROYALTY",
      artistId: 4,
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      date: "2024-08-12",
      type: "Album",
      genre: "Afrobeats",
      popularity: 97,
      audioPreview: "",
      description: "ZARA KINGS delivers a summer-defining album filled with infectious rhythms, featuring collaborations with top African producers.",
      tracklist: [
        { number: 1, name: "Royal Entrance", duration: "2:10" },
        { number: 2, name: "Dance Floor Queen", duration: "3:35" },
        { number: 3, name: "Accra Nights", duration: "3:50" },
        { number: 4, name: "Vibe with Me", duration: "3:28" },
        { number: 5, name: "Sweet Melody", duration: "4:02" },
        { number: 6, name: "Fire", duration: "3:15" },
        { number: 7, name: "Crown Me", duration: "3:42" },
        { number: 8, name: "Global Takeover", duration: "3:55" },
        { number: 9, name: "Sunset Groove", duration: "4:20" },
        { number: 10, name: "Reign Forever", duration: "3:30" }
      ]
    },
    {
      id: 5,
      title: "Street Psalms",
      artistId: 5,
      cover: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=800&q=80",
      date: "2024-06-05",
      type: "EP",
      genre: "Hip-Hop",
      popularity: 85,
      audioPreview: "",
      description: "DIESEL's gritty 7-track EP features raw storytelling over stripped-down production, capturing urban reality.",
      tracklist: [
        { number: 1, name: "Prayer", duration: "2:30" },
        { number: 2, name: "Corner Store Chronicles", duration: "3:45" },
        { number: 3, name: "Survival Mode", duration: "3:20" },
        { number: 4, name: "No Sleep", duration: "3:55" },
        { number: 5, name: "Brothers", duration: "4:10" },
        { number: 6, name: "Reflections", duration: "3:35" },
        { number: 7, name: "Rise", duration: "3:50" }
      ]
    },
    {
      id: 6,
      title: "Moonlight Serenade",
      artistId: 6,
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      date: "2025-02-14",
      type: "Single",
      genre: "R&B",
      popularity: 90,
      audioPreview: "",
      description: "LUNA GRACE's Valentine's Day release is a hauntingly beautiful ballad showcasing her incredible vocal range.",
      tracklist: [
        { number: 1, name: "Moonlight Serenade", duration: "4:25" }
      ]
    },
    {
      id: 7,
      title: "UNDERGROUND ANTHEMS",
      artistId: 7,
      cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      date: "2024-10-31",
      type: "Album",
      genre: "Electronic",
      popularity: 93,
      audioPreview: "",
      description: "PHANTOM PULSE's club-ready album features 12 tracks of heavy bass, intricate sound design, and dance floor energy.",
      tracklist: [
        { number: 1, name: "Enter the Void", duration: "1:30" },
        { number: 2, name: "Bass Ritual", duration: "4:15" },
        { number: 3, name: "Shadow Dance", duration: "3:50" },
        { number: 4, name: "Neon Nights", duration: "4:05" },
        { number: 5, name: "Pulse Check", duration: "3:35" },
        { number: 6, name: "Interlude: Transmission", duration: "1:45" },
        { number: 7, name: "Rave Culture", duration: "4:20" },
        { number: 8, name: "Digital Dreams", duration: "3:55" },
        { number: 9, name: "Final Hour", duration: "4:30" },
        { number: 10, name: "Exit Protocol", duration: "2:20" }
      ]
    },
    {
      id: 8,
      title: "Spiritual Journey",
      artistId: 8,
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
      date: "2024-12-01",
      type: "EP",
      genre: "Afrobeats",
      popularity: 87,
      audioPreview: "",
      description: "ESSENCE explores themes of spirituality and self-love across 5 meditative tracks blending Afrobeats with ambient elements.",
      tracklist: [
        { number: 1, name: "Awakening", duration: "4:05" },
        { number: 2, name: "Inner Peace", duration: "3:40" },
        { number: 3, name: "Sacred Dance", duration: "3:55" },
        { number: 4, name: "Divine Love", duration: "4:20" },
        { number: 5, name: "Transcendence", duration: "5:10" }
      ]
    },
    {
      id: 9,
      title: "Summer Nights",
      artistId: 9,
      cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      date: "2024-07-20",
      type: "Single",
      genre: "Pop",
      popularity: 94,
      audioPreview: "",
      description: "CRUZ delivers a summer anthem with catchy hooks and feel-good vibes perfect for beach parties and road trips.",
      tracklist: [
        { number: 1, name: "Summer Nights", duration: "3:15" }
      ]
    },
    {
      id: 10,
      title: "TIMELESS",
      artistId: 2,
      cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
      date: "2023-05-18",
      type: "Album",
      genre: "R&B",
      popularity: 91,
      audioPreview: "",
      description: "ASHA ROSE's breakthrough album features 11 tracks of pure soul, establishing her as a force in contemporary R&B.",
      tracklist: [
        { number: 1, name: "Forever Starts Now", duration: "3:30" },
        { number: 2, name: "Butterflies", duration: "3:45" },
        { number: 3, name: "Timeless Love", duration: "4:10" },
        { number: 4, name: "Memories", duration: "3:55" },
        { number: 5, name: "Midnight Thoughts", duration: "4:00" },
        { number: 6, name: "Hold Me Close", duration: "3:40" },
        { number: 7, name: "Stars Align", duration: "3:50" },
        { number: 8, name: "Vulnerable", duration: "4:15" },
        { number: 9, name: "Dreams Come True", duration: "3:35" },
        { number: 10, name: "Always", duration: "4:25" },
        { number: 11, name: "Timeless (Outro)", duration: "2:50" }
      ]
    },
    {
      id: 11,
      title: "BLACKOUT",
      artistId: 1,
      cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
      date: "2024-09-15",
      type: "Single",
      genre: "Hip-Hop",
      popularity: 89,
      audioPreview: "",
      description: "K-WAVE's aggressive single showcases his versatility with trap-influenced production and hard-hitting lyrics.",
      tracklist: [
        { number: 1, name: "BLACKOUT", duration: "3:05" }
      ]
    },
    {
      id: 12,
      title: "Echoes",
      artistId: 6,
      cover: "https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?w=800&q=80",
      date: "2024-04-22",
      type: "EP",
      genre: "R&B",
      popularity: 86,
      audioPreview: "",
      description: "LUNA GRACE's debut EP features atmospheric production and introspective lyrics exploring themes of identity and belonging.",
      tracklist: [
        { number: 1, name: "Introduction", duration: "1:55" },
        { number: 2, name: "Echoes", duration: "3:40" },
        { number: 3, name: "Lost in Translation", duration: "4:05" },
        { number: 4, name: "Mirror", duration: "3:30" },
        { number: 5, name: "Finding Home", duration: "4:20" }
      ]
    },
    {
      id: 13,
      title: "Party All Night",
      artistId: 4,
      cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
      date: "2025-01-25",
      type: "Single",
      genre: "Afrobeats",
      popularity: 96,
      audioPreview: "",
      description: "ZARA KINGS kicks off 2025 with an irresistible dance track that's already dominating clubs across the continent.",
      tracklist: [
        { number: 1, name: "Party All Night", duration: "3:25" }
      ]
    },
    {
      id: 14,
      title: "RETROGRADE",
      artistId: 3,
      cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      date: "2024-03-10",
      type: "Album",
      genre: "Electronic",
      popularity: 90,
      audioPreview: "",
      description: "NEXUS's experimental album pushes electronic music boundaries with futuristic soundscapes and genre-bending production.",
      tracklist: [
        { number: 1, name: "Launch Sequence", duration: "2:15" },
        { number: 2, name: "Retrograde", duration: "4:30" },
        { number: 3, name: "Cosmic Drift", duration: "3:55" },
        { number: 4, name: "Quantum Leap", duration: "4:10" },
        { number: 5, name: "Nebula", duration: "3:45" },
        { number: 6, name: "Asteroid Belt", duration: "4:00" },
        { number: 7, name: "Dark Matter", duration: "4:25" },
        { number: 8, name: "Wormhole", duration: "3:50" },
        { number: 9, name: "Re-entry", duration: "4:15" },
        { number: 10, name: "Landing", duration: "2:40" }
      ]
    },
    {
      id: 15,
      title: "Golden",
      artistId: 10,
      cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
      date: "2025-02-28",
      type: "Single",
      genre: "R&B",
      popularity: 88,
      audioPreview: "",
      description: "MAYA SOUL's latest single is a smooth, jazz-influenced R&B track celebrating self-worth and inner beauty.",
      tracklist: [
        { number: 1, name: "Golden", duration: "3:50" }
      ]
    }
  ]
};

// SVG ICONS
const ICONS = {
  spotify: '<svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
  apple: '<svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  tidal: '<svg viewBox="0 0 24 24"><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zm0 0l4.004 4.004L20.02 3.992 24.024 7.996 20.02 12l-4.004-4.004L12.012 12l4.004 4.004-4.004 4.004-4.004-4.004L12.012 12l-4.004-4.004 4.004-4.004z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
};

// ============================================
// STATE MANAGEMENT - Releases as Default
// ============================================
const STATE = {
  currentView: 'releases', // CHANGED: releases is now default
  searchQuery: '',
  filters: {
    types: ['Single', 'EP', 'Album'],
    genres: ['Hip-Hop', 'R&B', 'Afrobeats', 'Electronic', 'Pop'],
    year: 'all',
    sort: 'newest'
  },
  displayedItems: 6,
  itemsPerLoad: 6,
  currentAudioPlayer: null,
  focusTrapElements: []
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  renderCurrentView();
  
  // Sticky behavior for search bar
  const searchFilterBar = document.getElementById('searchFilterBar');
  
  // Use scroll event instead of IntersectionObserver for more reliable detection
  let lastScrollPos = 0;
  const searchBarTop = searchFilterBar ? searchFilterBar.offsetTop : 0;
  const hideOffset = 50; // Buttons disappear 50px before search bar sticks
  
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    
    // Hide buttons slightly before the search bar becomes sticky
    if (currentScrollPos > (searchBarTop - hideOffset)) {
      document.body.classList.add('search-sticky');
    } else {
      document.body.classList.remove('search-sticky');
    }
    
    // Add stuck class when search bar actually sticks
    if (currentScrollPos > searchBarTop) {
      searchFilterBar?.classList.add('stuck');
    } else {
      searchFilterBar?.classList.remove('stuck');
    }
    
    lastScrollPos = currentScrollPos;
  });
  
  // Scroll behavior for menu button
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
});

// ============================================
// EVENT LISTENERS
// ============================================
function initializeEventListeners() {
  // Menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu');
  const closeBtn = document.getElementById('closeBtn');
  
  menuBtn?.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
  
  closeBtn?.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    menuBtn.classList.remove('active');
  });
  
  // Search
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  
  searchInput?.addEventListener('input', (e) => {
    STATE.searchQuery = e.target.value.toLowerCase();
    searchClear.classList.toggle('active', STATE.searchQuery.length > 0);
    STATE.displayedItems = STATE.itemsPerLoad;
    renderCurrentView();
  });
  
  searchClear?.addEventListener('click', () => {
    searchInput.value = '';
    STATE.searchQuery = '';
    searchClear.classList.remove('active');
    STATE.displayedItems = STATE.itemsPerLoad;
    renderCurrentView();
  });
  
  // Filter toggle
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  const filterPanel = document.getElementById('filterPanel');
  const filterClose = document.getElementById('filterClose');
  const filterBackdrop = document.getElementById('filterBackdrop');
  
  filterToggleBtn?.addEventListener('click', () => {
    openFilterPanel();
  });
  
  filterClose?.addEventListener('click', () => {
    closeFilterPanel();
  });
  
  filterBackdrop?.addEventListener('click', () => {
    closeFilterPanel();
  });
  
  // View toggle
  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      STATE.currentView = btn.dataset.view;
      STATE.displayedItems = STATE.itemsPerLoad;
      
      // Show/hide type filter based on view
      const typeFilterGroup = document.getElementById('typeFilterGroup');
      if (STATE.currentView === 'releases') {
        typeFilterGroup.style.display = 'block';
      } else {
        typeFilterGroup.style.display = 'none';
      }
      
      renderCurrentView();
    });
  });
  
  // Filter changes
  const sortSelect = document.getElementById('sortSelect');
  sortSelect?.addEventListener('change', (e) => {
    STATE.filters.sort = e.target.value;
    STATE.displayedItems = STATE.itemsPerLoad;
    renderCurrentView();
  });
  
  const yearRange = document.getElementById('yearRange');
  yearRange?.addEventListener('change', (e) => {
    STATE.filters.year = e.target.value;
    STATE.displayedItems = STATE.itemsPerLoad;
    renderCurrentView();
  });
  
  // Type checkboxes
  const typeCheckboxes = document.querySelectorAll('input[name="type"]');
  typeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      STATE.filters.types = Array.from(typeCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      STATE.displayedItems = STATE.itemsPerLoad;
      renderCurrentView();
    });
  });
  
  // Genre checkboxes
  const genreCheckboxes = document.querySelectorAll('input[name="genre"]');
  genreCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      STATE.filters.genres = Array.from(genreCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      STATE.displayedItems = STATE.itemsPerLoad;
      renderCurrentView();
    });
  });
  
  // Reset filters
  const resetFilters = document.getElementById('resetFilters');
  resetFilters?.addEventListener('click', () => {
    STATE.filters = {
      types: ['Single', 'EP', 'Album'],
      genres: ['Hip-Hop', 'R&B', 'Afrobeats', 'Electronic', 'Pop'],
      year: 'all',
      sort: 'newest'
    };
    
    // Reset form
    sortSelect.value = 'newest';
    yearRange.value = 'all';
    typeCheckboxes.forEach(cb => cb.checked = true);
    genreCheckboxes.forEach(cb => cb.checked = true);
    
    STATE.displayedItems = STATE.itemsPerLoad;
    renderCurrentView();
  });
  
  // Apply filters (mobile)
  const applyFilters = document.getElementById('applyFilters');
  applyFilters?.addEventListener('click', () => {
    closeFilterPanel();
  });
  
  // Load more
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  loadMoreBtn?.addEventListener('click', () => {
    loadMore();
  });
  
  // Modal close handlers
  setupModalHandlers('artistModal');
  setupModalHandlers('releaseModal');
}

// ============================================
// FILTER PANEL
// ============================================
function openFilterPanel() {
  const filterPanel = document.getElementById('filterPanel');
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  
  filterPanel.classList.add('active');
  filterPanel.setAttribute('aria-hidden', 'false');
  filterToggleBtn.setAttribute('aria-expanded', 'true');
  
  // Focus trap
  const filterClose = document.getElementById('filterClose');
  filterClose?.focus();
  
  // Prevent body scroll on mobile
  if (window.innerWidth < 768) {
    document.body.style.overflow = 'hidden';
  }
}

function closeFilterPanel() {
  const filterPanel = document.getElementById('filterPanel');
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  
  filterPanel.classList.remove('active');
  filterPanel.setAttribute('aria-hidden', 'true');
  filterToggleBtn.setAttribute('aria-expanded', 'false');
  
  // Restore body scroll
  document.body.style.overflow = '';
  
  // Return focus to toggle button
  filterToggleBtn?.focus();
}

// ============================================
// RENDERING FUNCTIONS
// ============================================
function renderCurrentView() {
  if (STATE.currentView === 'artists') {
    renderArtists();
  } else {
    renderReleases();
  }
}

function renderArtists() {
  const artistsGrid = document.getElementById('artistsGrid');
  const releasesGrid = document.getElementById('releasesGrid');
  const resultsCount = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResults');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  // Show/hide grids
  artistsGrid.classList.remove('hidden');
  releasesGrid.classList.add('hidden');
  
  // Filter and sort artists
  let filteredArtists = DATA.artists.filter(artist => {
    // Search filter
    if (STATE.searchQuery) {
      const matchesSearch = artist.name.toLowerCase().includes(STATE.searchQuery) ||
                           artist.bio.toLowerCase().includes(STATE.searchQuery);
      if (!matchesSearch) return false;
    }
    
    // Genre filter
    const matchesGenre = artist.genres.some(genre => 
      STATE.filters.genres.includes(genre)
    );
    if (!matchesGenre) return false;
    
    return true;
  });
  
  // Sort artists
  filteredArtists = sortItems(filteredArtists, 'artist');
  
  // Update count
  resultsCount.textContent = `${filteredArtists.length} artist${filteredArtists.length !== 1 ? 's' : ''} found`;
  
  // Show/hide no results
  if (filteredArtists.length === 0) {
    noResults.classList.remove('hidden');
    artistsGrid.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    return;
  } else {
    noResults.classList.add('hidden');
  }
  
  // Render artists
  const displayArtists = filteredArtists.slice(0, STATE.displayedItems);
  artistsGrid.innerHTML = displayArtists.map(artist => createArtistCard(artist)).join('');
  
  // Show/hide load more button
  if (filteredArtists.length > STATE.displayedItems) {
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.disabled = false;
  } else {
    loadMoreBtn.style.display = 'none';
  }
  
  // Add event listeners to artist cards
  displayArtists.forEach(artist => {
    const card = document.querySelector(`[data-artist-id="${artist.id}"]`);
    card?.addEventListener('click', () => openArtistModal(artist.id));
  });
}

function renderReleases() {
  const artistsGrid = document.getElementById('artistsGrid');
  const releasesGrid = document.getElementById('releasesGrid');
  const resultsCount = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResults');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  // Show/hide grids
  artistsGrid.classList.add('hidden');
  releasesGrid.classList.remove('hidden');
  
  // Filter and sort releases
  let filteredReleases = DATA.releases.filter(release => {
    const artist = DATA.artists.find(a => a.id === release.artistId);
    
    // Search filter
    if (STATE.searchQuery) {
      const matchesSearch = release.title.toLowerCase().includes(STATE.searchQuery) ||
                           artist.name.toLowerCase().includes(STATE.searchQuery);
      if (!matchesSearch) return false;
    }
    
    // Type filter
    if (!STATE.filters.types.includes(release.type)) return false;
    
    // Genre filter
    if (!STATE.filters.genres.includes(release.genre)) return false;
    
    // Year filter
    if (STATE.filters.year !== 'all') {
      const releaseYear = new Date(release.date).getFullYear().toString();
      if (releaseYear !== STATE.filters.year) return false;
    }
    
    return true;
  });
  
  // Sort releases
  filteredReleases = sortItems(filteredReleases, 'release');
  
  // Update count
  resultsCount.textContent = `${filteredReleases.length} release${filteredReleases.length !== 1 ? 's' : ''} found`;
  
  // Show/hide no results
  if (filteredReleases.length === 0) {
    noResults.classList.remove('hidden');
    releasesGrid.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    return;
  } else {
    noResults.classList.add('hidden');
  }
  
  // Render releases
  const displayReleases = filteredReleases.slice(0, STATE.displayedItems);
  releasesGrid.innerHTML = displayReleases.map(release => createReleaseCard(release)).join('');
  
  // Show/hide load more button
  if (filteredReleases.length > STATE.displayedItems) {
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.disabled = false;
  } else {
    loadMoreBtn.style.display = 'none';
  }
  
  // Add event listeners to release cards
  displayReleases.forEach(release => {
    const viewBtn = document.querySelector(`[data-release-id="${release.id}"]`);
    viewBtn?.addEventListener('click', () => openReleaseModal(release.id));
  });
}

// ============================================
// CARD CREATION
// ============================================
function createArtistCard(artist) {
  const releaseCount = DATA.releases.filter(r => r.artistId === artist.id).length;
  
  return `
    <div class="artist-card" data-artist-id="${artist.id}" role="button" tabindex="0" aria-label="View ${artist.name} details">
      <div class="artist-image-wrapper">
        <img src="${artist.image}" alt="${artist.name}" class="artist-image" loading="lazy">
      </div>
      <div class="artist-info">
        <h3 class="artist-name">${artist.name}</h3>
        <p class="artist-bio">${artist.bio}</p>
        <p class="artist-meta">${releaseCount} release${releaseCount !== 1 ? 's' : ''}</p>
        <button class="view-artist-btn" aria-label="View ${artist.name} profile">View Artist</button>
      </div>
    </div>
  `;
}

function createReleaseCard(release) {
  const artist = DATA.artists.find(a => a.id === release.artistId);
  const formattedDate = formatDate(release.date);
  
  return `
    <div class="release-card">
      <div class="release-cover-wrapper">
        <img src="${release.cover}" alt="${release.title} by ${artist.name}" class="release-cover" loading="lazy">
        <span class="release-type-badge">${release.type.toUpperCase()}</span>
      </div>
      <div class="release-info">
        <h3 class="release-title">${release.title}</h3>
        <p class="release-artist">${artist.name}</p>
        <div class="release-meta">
          <span class="release-date">${formattedDate}</span>
          <span>•</span>
          <span class="release-genre">${release.genre}</span>
        </div>
        <div class="streaming-icons">
          <a href="#" class="streaming-icon spotify" aria-label="Listen on Spotify" title="Spotify">${ICONS.spotify}</a>
          <a href="#" class="streaming-icon apple" aria-label="Listen on Apple Music" title="Apple Music">${ICONS.apple}</a>
          <a href="#" class="streaming-icon youtube" aria-label="Listen on YouTube" title="YouTube">${ICONS.youtube}</a>
        </div>
        ${release.audioPreview ? `
          <div class="audio-preview">
            <div class="audio-controls">
              <button class="play-pause-btn" data-audio-id="${release.id}" aria-label="Play preview">▶</button>
              <span class="audio-time">Preview</span>
            </div>
          </div>
        ` : ''}
        <button class="view-release-btn" data-release-id="${release.id}" aria-label="View ${release.title} details">View Release</button>
      </div>
    </div>
  `;
}

// Continue in next part...

// ============================================
// SORTING
// ============================================
function sortItems(items, type) {
  const sorted = [...items];
  
  switch (STATE.filters.sort) {
    case 'newest':
      if (type === 'release') {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
        // For artists, sort by their most recent release
        sorted.sort((a, b) => {
          const aReleases = DATA.releases.filter(r => r.artistId === a.id);
          const bReleases = DATA.releases.filter(r => r.artistId === b.id);
          const aLatest = aReleases.length ? Math.max(...aReleases.map(r => new Date(r.date))) : 0;
          const bLatest = bReleases.length ? Math.max(...bReleases.map(r => new Date(r.date))) : 0;
          return bLatest - aLatest;
        });
      }
      break;
      
    case 'oldest':
      if (type === 'release') {
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else {
        sorted.sort((a, b) => {
          const aReleases = DATA.releases.filter(r => r.artistId === a.id);
          const bReleases = DATA.releases.filter(r => r.artistId === b.id);
          const aEarliest = aReleases.length ? Math.min(...aReleases.map(r => new Date(r.date))) : Infinity;
          const bEarliest = bReleases.length ? Math.min(...bReleases.map(r => new Date(r.date))) : Infinity;
          return aEarliest - bEarliest;
        });
      }
      break;
      
    case 'popular':
      if (type === 'release') {
        sorted.sort((a, b) => b.popularity - a.popularity);
      } else {
        // For artists, calculate average popularity of their releases
        sorted.sort((a, b) => {
          const aReleases = DATA.releases.filter(r => r.artistId === a.id);
          const bReleases = DATA.releases.filter(r => r.artistId === b.id);
          const aAvg = aReleases.length ? aReleases.reduce((sum, r) => sum + r.popularity, 0) / aReleases.length : 0;
          const bAvg = bReleases.length ? bReleases.reduce((sum, r) => sum + r.popularity, 0) / bReleases.length : 0;
          return bAvg - aAvg;
        });
      }
      break;
      
    case 'alphabetical':
      if (type === 'release') {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      }
      break;
  }
  
  return sorted;
}

// ============================================
// LOAD MORE
// ============================================
function loadMore() {
  STATE.displayedItems += STATE.itemsPerLoad;
  renderCurrentView();
  
  // Announce to screen readers
  const resultsCount = document.getElementById('resultsCount');
  resultsCount?.setAttribute('aria-live', 'polite');
}

// ============================================
// MODAL HANDLERS
// ============================================
function setupModalHandlers(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = modal?.querySelector('.modal-backdrop');
  const closeBtn = modal?.querySelector('.modal-close');
  const content = modal?.querySelector('.modal-content');
  
  // Close button
  closeBtn?.addEventListener('click', () => {
    closeModal(modalId);
  });
  
  // Backdrop click
  backdrop?.addEventListener('click', () => {
    closeModal(modalId);
  });
  
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal(modalId);
    }
  });
  
  // Swipe to close on mobile
  let touchStartY = 0;
  let touchEndY = 0;
  
  content?.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  
  content?.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeDistance = touchEndY - touchStartY;
    // Swipe down to close (minimum 100px)
    if (swipeDistance > 100) {
      closeModal(modalId);
    }
  }
}

function openArtistModal(artistId) {
  const artist = DATA.artists.find(a => a.id === artistId);
  if (!artist) return;
  
  const modal = document.getElementById('artistModal');
  const modalBody = document.getElementById('artistModalBody');
  
  // Get artist's releases
  const artistReleases = DATA.releases.filter(r => r.artistId === artistId);
  
  // Create modal content
  modalBody.innerHTML = `
    <div class="artist-detail-header">
      <img src="${artist.image}" alt="${artist.name}" class="artist-detail-image">
      <h2 class="artist-detail-name" id="artistModalTitle">${artist.name}</h2>
      <p class="artist-detail-genre">${artist.genres.join(' • ')}</p>
    </div>
    
    <div class="artist-social-links">
      <a href="${artist.social.instagram}" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      <a href="${artist.social.twitter}" class="social-link" target="_blank" rel="noopener" aria-label="Twitter">${ICONS.twitter}</a>
      <a href="${artist.social.spotify}" class="social-link" target="_blank" rel="noopener" aria-label="Spotify">${ICONS.spotify}</a>
    </div>
    
    <div class="artist-detail-bio">
      ${artist.bio}
    </div>
    
    ${artistReleases.length > 0 ? `
      <div class="artist-releases-section">
        <h3 class="section-title">RELEASES (${artistReleases.length})</h3>
        <div class="artist-releases-list">
          ${artistReleases.map(release => `
            <div class="artist-release-item" data-release-click="${release.id}" role="button" tabindex="0" aria-label="View ${release.title}">
              <img src="${release.cover}" alt="${release.title}" class="artist-release-cover">
              <div class="artist-release-info">
                <h4 class="artist-release-title">${release.title}</h4>
                <p class="artist-release-meta">${release.type} • ${formatDate(release.date)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '<p style="text-align: center; color: var(--text-gray); margin-top: 2rem;">No releases yet.</p>'}
  `;
  
  // Show modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  
  // Focus management
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn?.focus();
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Add event listeners to release items
  artistReleases.forEach(release => {
    const item = modalBody.querySelector(`[data-release-click="${release.id}"]`);
    item?.addEventListener('click', () => {
      closeModal('artistModal');
      setTimeout(() => openReleaseModal(release.id), 300);
    });
  });
}

function openReleaseModal(releaseId) {
  const release = DATA.releases.find(r => r.id === releaseId);
  if (!release) return;
  
  const artist = DATA.artists.find(a => a.id === release.artistId);
  const modal = document.getElementById('releaseModal');
  const modalBody = document.getElementById('releaseModalBody');
  
  // Create modal content
  modalBody.innerHTML = `
    <div class="release-detail-header">
      <img src="${release.cover}" alt="${release.title}" class="release-detail-cover">
      <h2 class="release-detail-title" id="releaseModalTitle">${release.title}</h2>
      <p class="release-detail-artist">${artist.name}</p>
      <div class="release-detail-meta">
        <span>${release.type}</span>
        <span>•</span>
        <span>${formatDate(release.date)}</span>
        <span>•</span>
        <span>${release.genre}</span>
      </div>
    </div>
    
    <div class="release-detail-description">
      ${release.description}
    </div>
    
    <div class="release-streaming-section">
      <h3 class="streaming-title">STREAM NOW</h3>
      <div class="release-streaming-links">
        <a href="#" class="streaming-icon spotify" aria-label="Listen on Spotify" title="Spotify">${ICONS.spotify}</a>
        <a href="#" class="streaming-icon apple" aria-label="Listen on Apple Music" title="Apple Music">${ICONS.apple}</a>
        <a href="#" class="streaming-icon youtube" aria-label="Listen on YouTube" title="YouTube">${ICONS.youtube}</a>
        <a href="#" class="streaming-icon tidal" aria-label="Listen on Tidal" title="Tidal">${ICONS.tidal}</a>
      </div>
    </div>
    
    ${release.audioPreview ? `
      <div class="release-audio-section">
        <h3 class="audio-title">PREVIEW</h3>
        <div class="full-audio-player">
          <div class="audio-player-controls">
            <button class="play-pause-btn" id="modalPlayBtn" aria-label="Play preview">▶</button>
            <span class="audio-time">0:00 / 0:30</span>
          </div>
          <audio id="modalAudioPlayer" src="${release.audioPreview}"></audio>
        </div>
      </div>
    ` : ''}
    
    ${release.tracklist && release.tracklist.length > 0 ? `
      <div class="tracklist-section">
        <h3 class="section-title">TRACKLIST</h3>
        <ul class="tracklist">
          ${release.tracklist.map(track => `
            <li class="track-item">
              <span class="track-number">${track.number}</span>
              <span class="track-name">${track.name}</span>
              <span class="track-duration">${track.duration}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    ` : ''}
  `;
  
  // Show modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  
  // Focus management
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn?.focus();
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Audio player setup (if preview exists)
  if (release.audioPreview) {
    setupAudioPlayer('modalAudioPlayer', 'modalPlayBtn');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal?.classList.remove('active');
  modal?.setAttribute('aria-hidden', 'true');
  
  // Stop any playing audio
  if (STATE.currentAudioPlayer) {
    STATE.currentAudioPlayer.pause();
    STATE.currentAudioPlayer.currentTime = 0;
    STATE.currentAudioPlayer = null;
  }
  
  // Restore body scroll
  document.body.style.overflow = '';
  
  // Return focus to trigger element (approximate - in production you'd track this)
  const searchInput = document.getElementById('searchInput');
  searchInput?.focus();
}

// ============================================
// AUDIO PLAYER
// ============================================
function setupAudioPlayer(audioId, buttonId) {
  const audio = document.getElementById(audioId);
  const playBtn = document.getElementById(buttonId);
  
  if (!audio || !playBtn) return;
  
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      // Stop any currently playing audio
      if (STATE.currentAudioPlayer && STATE.currentAudioPlayer !== audio) {
        STATE.currentAudioPlayer.pause();
        STATE.currentAudioPlayer.currentTime = 0;
      }
      
      audio.play();
      playBtn.textContent = '⏸';
      playBtn.setAttribute('aria-label', 'Pause preview');
      STATE.currentAudioPlayer = audio;
    } else {
      audio.pause();
      playBtn.textContent = '▶';
      playBtn.setAttribute('aria-label', 'Play preview');
    }
  });
  
  audio.addEventListener('ended', () => {
    playBtn.textContent = '▶';
    playBtn.setAttribute('aria-label', 'Play preview');
    audio.currentTime = 0;
  });
  
  audio.addEventListener('timeupdate', () => {
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    const timeDisplay = playBtn.nextElementSibling;
    if (timeDisplay) {
      timeDisplay.textContent = `${currentTime} / ${duration}`;
    }
  });
}

function playPreview(releaseId) {
  const release = DATA.releases.find(r => r.id === releaseId);
  if (!release || !release.audioPreview) return;
  
  // This function can be called from card audio buttons
  // For now, it's primarily used in the modal
  console.log('Playing preview for:', release.title);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================
// EXPOSED FUNCTIONS FOR EXTERNAL USE
// ============================================
window.ArtistsReleases = {
  renderArtists,
  renderReleases,
  applyFilters: renderCurrentView,
  openArtistModal,
  openReleaseModal,
  playPreview,
  loadMore
};