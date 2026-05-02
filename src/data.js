// data.js — Hardcoded test data
// ARTISTS holds artist profiles; TATTOOS holds posts that reference artists by handle.

export const ARTISTS = {
  shadow_studio: {
    handle: "shadow_studio",
    name: "Shadow Studio",
    style: "Black and Gray",
    location: "Los Angeles, CA",
    bio: "Specializing in high-contrast Black and Gray realism and custom designs. Books open for Fall.",
    social: "@shadow_studio_ink",
    avatar: "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  ink_and_sticker: {
    handle: "ink_and_sticker",
    name: "Ink & Sticker",
    style: "Black and Gray",
    location: "Brooklyn, NY",
    bio: "Fine line and minimalist black and gray work. DM for custom quotes.",
    social: "@ink.and.sticker",
    avatar: "https://images.pexels.com/photos/19474850/pexels-photo-19474850.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  rising_sun_tattoos: {
    handle: "rising_sun_tattoos",
    name: "Rising Sun Tattoos",
    style: "Patchwork",
    location: "Austin, TX",
    bio: "Vibrant patchwork sleeves and walk-ins welcome on weekends.",
    social: "@risingsun.tattoo",
    avatar: "https://images.pexels.com/photos/5185051/pexels-photo-5185051.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  mono_ink: {
    handle: "mono_ink",
    name: "Mono Ink",
    style: "Patchwork",
    location: "Portland, OR",
    bio: "Bold, hand-poked patchwork. Available for full-day sessions.",
    social: "@mono_ink_pdx",
    avatar: "https://images.pexels.com/photos/17464943/pexels-photo-17464943.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  the_collector: {
    handle: "the_collector",
    name: "The Collector",
    style: "Japanese",
    location: "San Francisco, CA",
    bio: "Traditional Japanese irezumi. Custom designs only — no flash.",
    social: "@the.collector.sf",
    avatar: "https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  tattoo_dragon: {
    handle: "tattoo_dragon",
    name: "Tattoo Dragon",
    style: "Japanese",
    location: "Tokyo, JP",
    bio: "Specializing in koi, dragons, and large-scale Japanese sleeves and back pieces.",
    social: "@tattoo_dragon.jp",
    avatar: "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
};

export const DEFAULT_ARTIST_HANDLE = "shadow_studio";

export const TATTOOS = [
  {
    id: 1,
    style: "Black and Gray",
    artistHandle: "shadow_studio",
    url: "https://images.pexels.com/photos/11619031/pexels-photo-11619031.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 1284,
    comments: 42
  },
  {
    id: 2,
    style: "Black and Gray",
    artistHandle: "ink_and_sticker",
    url: "https://images.pexels.com/photos/19474850/pexels-photo-19474850.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 932,
    comments: 18
  },
  {
    id: 3,
    style: "Patchwork",
    artistHandle: "rising_sun_tattoos",
    url: "https://images.pexels.com/photos/5185051/pexels-photo-5185051.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 2104,
    comments: 76
  },
  {
    id: 4,
    style: "Patchwork",
    artistHandle: "mono_ink",
    url: "https://images.pexels.com/photos/17464943/pexels-photo-17464943.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 654,
    comments: 11
  },
  {
    id: 5,
    style: "Japanese",
    artistHandle: "the_collector",
    url: "https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 3401,
    comments: 128
  },
  {
    id: 6,
    style: "Japanese",
    artistHandle: "tattoo_dragon",
    url: "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 1789,
    comments: 54
  },
];
