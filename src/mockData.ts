import { IEvent, IPlayer, ITeam } from './interfaces';

export const teamsData: ITeam[] = [
  {
    "name": "Virtus.pro",
    "deleted_at": null,
    "id": 31,
    "short_name": "VP",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/virtus-pro-vp-oldnt-logo.png",
      "fallback": false
    },
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/virtuspro"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/www.virtus.pro"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/virtuspro"
      }
    ],
    "coach": null
  },
  {
    "name": "Team Secret",
    "deleted_at": null,
    "id": 1462,
    "short_name": "Secret",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Team-Secret.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Team-Secret.png",
      "fallback": false
    },
    "country": {
      "name": "European Union",
      "short_name": "EU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/European-Union.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/European-Union.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/teamsecret"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/TeamSecret"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/teamsecret"
      }
    ],
    "coach": null
  },
  {
    "name": "Team Liquid",
    "deleted_at": null,
    "id": 5904,
    "short_name": "Liquid",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/events/Team-Liquid-2017-logo.png",
      "thumbnail": "https://img.abiosgaming.com/events/thumbnails/Team-Liquid-2017-logo.png",
      "fallback": false
    },
    "country": {
      "name": "European Union",
      "short_name": "EU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/European-Union.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/European-Union.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/teamliquid"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/teamliquid"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/teamliquid"
      }
    ],
    "coach": null
  },
  {
    "name": "Wings Gaming",
    "deleted_at": null,
    "id": 1696,
    "short_name": "Wings",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Wings-Gaming-new.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Wings-Gaming-new.png",
      "fallback": false
    },
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/wingsgamingcn"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/dota2wingsgaming"
      }
    ],
    "coach": null
  },
  {
    "name": "Evil Geniuses",
    "deleted_at": null,
    "id": 4,
    "short_name": "EG",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Evil-Geniuses-EG.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Evil-Geniuses-EG.png",
      "fallback": false
    },
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/EvilGeniuses"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/EvilGeniuses"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/eg"
      }
    ],
    "coach": null
  },
  {
    "name": "PSG.LGD",
    "deleted_at": null,
    "id": 11,
    "short_name": "PSG.LGD",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/LGD-PSG-LOGO.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/LGD-PSG-LOGO.png",
      "fallback": false
    },
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/LGDgaming"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/lgdgaming"
      }
    ],
    "coach": null
  },
  {
    "name": "Fnatic",
    "deleted_at": null,
    "id": 1854,
    "short_name": "FNC",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Fnatic-logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Fnatic-logo.png",
      "fallback": false
    },
    "country": {
      "name": "Malaysia",
      "short_name": "MY",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Malaysia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Malaysia.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/FNATIC"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/fnatic"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/fnatic"
      }
    ],
    "coach": null
  },
  {
    "name": "EHOME",
    "deleted_at": null,
    "id": 2407,
    "short_name": "EHOME",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/EHOME.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/EHOME.png",
      "fallback": false
    },
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/ehomecn"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/ehomecn"
      }
    ],
    "coach": null
  },
  {
    "name": "Vici Gaming",
    "deleted_at": null,
    "id": 30,
    "short_name": "VG",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Vici-gaming-2017.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Vici-gaming-2017.png",
      "fallback": false
    },
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/vici_gaming"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/TeamViCiGaming"
      }
    ],
    "coach": null
  },
  {
    "name": "TNC Predator",
    "deleted_at": null,
    "id": 2572,
    "short_name": "TnC",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/TNC-pro-team-new-logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/TNC-pro-team-new-logo.png",
      "fallback": false
    },
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/tncproteam"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/TNCProTeamDota2"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/tncesportstv"
      }
    ],
    "coach": null
  },
  {
    "name": "J.Storm",
    "deleted_at": null,
    "id": 47057,
    "short_name": "J.Storm",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/jstorm-j-storm-logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/jstorm-j-storm-logo.png",
      "fallback": false
    },
    "country": {
      "name": "North America",
      "short_name": "NA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/North-America.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/North-America.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "social_media_accounts": [],
    "coach": null
  },
  {
    "name": "Thunder Predator",
    "deleted_at": null,
    "id": 16045,
    "short_name": "TP",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/ThunderPredator-teamlogo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/ThunderPredator-teamlogo.png",
      "fallback": false
    },
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Thunderawakengg"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/thunder_awaken"
      }
    ],
    "coach": null
  },
  {
    "name": "Chaos Esports Club ",
    "deleted_at": null,
    "id": 50152,
    "short_name": "Chaos",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Team-Chaos-Esports-Club-US.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Team-Chaos-Esports-Club-US.png",
      "fallback": false
    },
    "country": {
      "name": "Brazil",
      "short_name": "BR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Brazil.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Brazil.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/ChaosEC"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/ChaosEsportClub"
      }
    ],
    "coach": null
  },
  {
    "name": "Team Aster",
    "deleted_at": null,
    "id": 46650,
    "short_name": "Aster",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Team-Aster-logo-new.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Team-Aster-logo-new.png",
      "fallback": false
    },
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/AsterCN"
      }
    ],
    "coach": null
  },
  {
    "name": "Forward Gaming ",
    "deleted_at": null,
    "id": 46761,
    "short_name": "FG",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Forward-gaming.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Forward-gaming.png",
      "fallback": false
    },
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/goforwardgg"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/forward.gg"
      }
    ],
    "coach": null
  },
  {
    "name": "The Pango",
    "deleted_at": null,
    "id": 47282,
    "short_name": "Pango",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/the-pango-logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/the-pango-logo.png",
      "fallback": false
    },
    "country": {
      "name": "European Union",
      "short_name": "EU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/European-Union.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/European-Union.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/NPangolier"
      }
    ],
    "coach": null
  },
  {
    "name": "The Alliance",
    "deleted_at": null,
    "id": 1,
    "short_name": "Alliance",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/The-Alliance-v2.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/The-Alliance-v2.png",
      "fallback": false
    },
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/theAllianceGG"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/theAllianceGG"
      }
    ],
    "coach": null
  },
  {
    "name": "Plus Ultra",
    "deleted_at": null,
    "id": 48817,
    "short_name": "PU",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "social_media_accounts": [],
    "coach": null
  },
  {
    "name": "The Final Tribe",
    "deleted_at": null,
    "id": 36435,
    "short_name": "TFT",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/The_Final_Tribe_Logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/The_Final_Tribe_Logo.png",
      "fallback": false
    },
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/thefinaltribe"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/TheFinalTribe"
      }
    ],
    "coach": null
  },
  {
    "name": "Keen Gaming",
    "deleted_at": null,
    "id": 35958,
    "short_name": "KG",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/keen-gaming-logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/keen-gaming-logo.png",
      "fallback": false
    },
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "social_media_accounts": [],
    "coach": null
  },
  {
    "name": "Ninjas In Pyjamas",
    "deleted_at": null,
    "id": 2394,
    "short_name": "NiP",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Ninjas-In-Pyjamas-NIP-Logo-New.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Ninjas-In-Pyjamas-NIP-Logo-New.png",
      "fallback": false
    },
    "country": {
      "name": "European Union",
      "short_name": "EU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/European-Union.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/European-Union.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/NiPGaming"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/NiPGaming"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/NiPGaming"
      }
    ],
    "coach": null
  },
  {
    "name": "Infamous",
    "deleted_at": null,
    "id": 1956,
    "short_name": "Infamous",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/INfamous-logo-new.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/INfamous-logo-new.png",
      "fallback": false
    },
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/infamous_gg"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/infamousgamingteam"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/infamousgaminghouse"
      }
    ],
    "coach": null
  },
  {
    "name": "Mineski",
    "deleted_at": null,
    "id": 14,
    "short_name": "Mineski",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Mineski-clean-logo-new.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Mineski-clean-logo-new.png",
      "fallback": false
    },
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/mineskiproteam"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/mineskidota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/mineskitv"
      }
    ],
    "coach": null
  },
  {
    "name": "Natus Vincere",
    "deleted_at": null,
    "id": 17,
    "short_name": "Na'Vi",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Natus-Vincere-Navi-new-logo.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Natus-Vincere-Navi-new-logo.png",
      "fallback": false
    },
    "country": {
      "name": "Ukraine",
      "short_name": "UA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Ukraine.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Ukraine.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/NatusVincere"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/NatusVincere"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/navi"
      }
    ],
    "coach": null
  },
  {
    "name": "compLexity",
    "deleted_at": null,
    "id": 1625,
    "short_name": "coL",
    "active": true,
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Team-complexity-new.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Team-complexity-new.png",
      "fallback": false
    },
    "country": {
      "name": "North America",
      "short_name": "NA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/North-America.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/North-America.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/compLexity"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/ComplexityGaming"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/complexity"
      }
    ],
    "coach": null
  }
];

export const playersData: IPlayer[] = [
  {
    "nick_name": "9pasha",
    "deleted_at": null,
    "id": 7645,
    "active": true,
    "first_name": "Pavel",
    "last_name": "Khvastunov",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/9pasha-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/9pasha-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/9pashka"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/9pasha"
      }
    ]
  },
  {
    "nick_name": "No[o]ne",
    "deleted_at": null,
    "id": 7646,
    "active": true,
    "first_name": "Vladimir",
    "last_name": "Minenko",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/noone-dota2-ukr-vladimir-minenko.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/noone-dota2-ukr-vladimir-minenko.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Ukraine",
      "short_name": "UA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Ukraine.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Ukraine.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Noone_dota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/nooneboss"
      }
    ]
  },
  {
    "nick_name": "Solo",
    "deleted_at": null,
    "id": 7648,
    "active": true,
    "first_name": "Alexei",
    "last_name": "Berezin",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/solo-dota2-RUS-alexei-berezin.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/solo-dota2-RUS-alexei-berezin.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/dotaSolo"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/sololineabuse"
      }
    ]
  },
  {
    "nick_name": "RAMZES666",
    "deleted_at": null,
    "id": 10730,
    "active": true,
    "first_name": "Roman",
    "last_name": "Kushnarev",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/ramzes666-dota2-RUS-roman-kushnarev.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/ramzes666-dota2-RUS-roman-kushnarev.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/ramzesdoto"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/ramzesdoto"
      }
    ]
  },
  {
    "nick_name": "RodjER",
    "deleted_at": null,
    "id": 23588,
    "active": true,
    "first_name": "Vladimir",
    "last_name": "Nikogosyan",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/rodjer-dota2-RUS-vladimir-nikogosyan.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/rodjer-dota2-RUS-vladimir-nikogosyan.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/rodjerdota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/rodjer"
      }
    ]
  },
  {
    "nick_name": "Puppey",
    "deleted_at": null,
    "id": 7598,
    "active": true,
    "first_name": "Clement",
    "last_name": "Ivanov",
    "images": {
      "default": "https://img.abiosgaming.com/casters/puppey-dota2-EST-Clement-Ivanov.png",
      "thumbnail": "https://img.abiosgaming.com/casters/thumbnails/puppey-dota2-EST-Clement-Ivanov.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Estonia",
      "short_name": "EE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Estonia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Estonia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/clementinator"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/OfficialPuppey"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/puppey"
      }
    ]
  },
  {
    "nick_name": "YapzOr",
    "deleted_at": null,
    "id": 8571,
    "active": true,
    "first_name": "Yazied",
    "last_name": "Jaradat",
    "images": {
      "default": "https://img.abiosgaming.com/casters/Yapzor-dota2-JOR-Yazied-Jaradat.png",
      "thumbnail": "https://img.abiosgaming.com/casters/thumbnails/Yapzor-dota2-JOR-Yazied-Jaradat.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Jordan",
      "short_name": "JO",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Jordan.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Jordan.png"
      },
      "region": {
        "id": 7,
        "name": "Western Asia",
        "short_name": "WA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/YapzOrdota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/YapzOrdota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/yapzordota"
      }
    ]
  },
  {
    "nick_name": "zai",
    "deleted_at": null,
    "id": 11389,
    "active": true,
    "first_name": "Ludwig",
    "last_name": "Wåhlberg",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Zai-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Zai-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-09-11",
        "to": null
      },
      {
        "name": "3/4",
        "from": "2018-03-08",
        "to": "2018-09-11"
      },
      {
        "name": "3",
        "from": "2017-09-05",
        "to": "2018-03-07"
      },
      {
        "name": "4/5",
        "from": "2016-09-15",
        "to": "2017-08-30"
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/zai_2002"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/zai"
      }
    ]
  },
  {
    "nick_name": "MidOne",
    "deleted_at": null,
    "id": 13030,
    "active": true,
    "first_name": "Yeik",
    "last_name": "Nai Zheng",
    "images": {
      "default": "https://img.abiosgaming.com/casters/MidOne-dota2-Malaysia-Yeik-Nai-Zheng.png",
      "thumbnail": "https://img.abiosgaming.com/casters/thumbnails/MidOne-dota2-Malaysia-Yeik-Nai-Zheng.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2016-08-27",
        "to": null
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2016-08-27"
      }
    ],
    "country": {
      "name": "Malaysia",
      "short_name": "MY",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Malaysia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Malaysia.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/midonedota2"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/miduandota2"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/midone"
      }
    ]
  },
  {
    "nick_name": "Nisha",
    "deleted_at": null,
    "id": 13383,
    "active": true,
    "first_name": "Michał",
    "last_name": "Jankowski",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-09-11",
        "to": null
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2018-09-11"
      }
    ],
    "country": {
      "name": "Poland",
      "short_name": "PL",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Poland.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Poland.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/nishadota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/nishadota"
      }
    ]
  },
  {
    "nick_name": "MATUMBAMAN",
    "deleted_at": null,
    "id": 7580,
    "active": true,
    "first_name": "Lasse",
    "last_name": "Urpalainen",
    "images": {
      "default": "https://img.abiosgaming.com/casters/Matumbaman-DOta2-FIN-Lasse-Urpalainen.png",
      "thumbnail": "https://img.abiosgaming.com/casters/thumbnails/Matumbaman-DOta2-FIN-Lasse-Urpalainen.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Finland",
      "short_name": "FI",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Finland.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Finland.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/LiquidMatumba"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/LiquidMATUMBAMAN"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/MATUMBAMAN"
      }
    ]
  },
  {
    "nick_name": "MinD_ContRoL",
    "deleted_at": null,
    "id": 7582,
    "active": true,
    "first_name": "Ivan",
    "last_name": "Borislavov",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/mind_control-DOta2-BUL-ivan-ivanov.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/mind_control-DOta2-BUL-ivan-ivanov.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Bulgaria",
      "short_name": "BG",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Bulgaria.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Bulgaria.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/LiquidMinD_ctrL"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/mindcontrolll"
      }
    ]
  },
  {
    "nick_name": "KuroKy",
    "deleted_at": null,
    "id": 7584,
    "active": true,
    "first_name": "Kuro",
    "last_name": "Salehi Takhasomi",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Kurouky-DOta2-DEU-Kuro-Salehi-Takhasomi.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Kurouky-DOta2-DEU-Kuro-Salehi-Takhasomi.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4/5",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Germany",
      "short_name": "DE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Germany.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Germany.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/liquidkuroky"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/KuroKy.kky"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/kuroky"
      }
    ]
  },
  {
    "nick_name": "Miracle-",
    "deleted_at": null,
    "id": 7640,
    "active": true,
    "first_name": "Amer",
    "last_name": "Al-Barkawi",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/miracle-DOta2-JOR-amer-al-barkawi.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/miracle-DOta2-JOR-amer-al-barkawi.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Jordan",
      "short_name": "JO",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Jordan.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Jordan.png"
      },
      "region": {
        "id": 7,
        "name": "Western Asia",
        "short_name": "WA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Liquid_Miracle"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/MiracleDotaOfficial"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/miracle_doto"
      }
    ]
  },
  {
    "nick_name": "GH",
    "deleted_at": null,
    "id": 23955,
    "active": true,
    "first_name": "Maroun",
    "last_name": "Merhej",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/GH-DOta2-LBN-Maroun-Merhej.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/GH-DOta2-LBN-Maroun-Merhej.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4/5",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Lebanon",
      "short_name": "LB",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Lebanon.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Lebanon.png"
      },
      "region": {
        "id": 7,
        "name": "Western Asia",
        "short_name": "WA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/LiquidGh_"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/marounghgod"
      }
    ]
  },
  {
    "nick_name": "bLinK / 跳刀跳刀丶",
    "deleted_at": null,
    "id": 10760,
    "active": true,
    "first_name": "Zhou",
    "last_name": "Yang",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Faith_Bian",
    "deleted_at": null,
    "id": 10761,
    "active": true,
    "first_name": "Zhang",
    "last_name": "Ruida",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-05-25",
        "to": null
      },
      {
        "name": "3",
        "from": "2013-03-14",
        "to": "2018-05-24"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Innocence /  y`",
    "deleted_at": null,
    "id": 15701,
    "active": true,
    "first_name": "Zhang",
    "last_name": "Yiping",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/y1122Innocence"
      }
    ]
  },
  {
    "nick_name": "Shadow",
    "deleted_at": null,
    "id": 15702,
    "active": true,
    "first_name": "Chu",
    "last_name": "Zeyu",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "iceice",
    "deleted_at": null,
    "id": 15703,
    "active": true,
    "first_name": "Li",
    "last_name": "Peng",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-03-08"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Cr1t-",
    "deleted_at": null,
    "id": 7643,
    "active": true,
    "first_name": "Andreas",
    "last_name": "Nielsen",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Cr1t-dota2-DNK-Andreas-Nielsen.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Cr1t-dota2-DNK-Andreas-Nielsen.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4",
        "from": "2017-12-20",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2017-12-20"
      }
    ],
    "country": {
      "name": "Denmark",
      "short_name": "DK",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Denmark.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Denmark.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Cr1tdota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Cr1tdota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/cr1tdota"
      }
    ]
  },
  {
    "nick_name": "Fly",
    "deleted_at": null,
    "id": 7644,
    "active": true,
    "first_name": "Tal",
    "last_name": "Aizik",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Fly-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Fly-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Israel",
      "short_name": "IL",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Israel.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Israel.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Fly_dota2"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/FlyDota2"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/Fly_dota2"
      }
    ]
  },
  {
    "nick_name": "s4",
    "deleted_at": null,
    "id": 7656,
    "active": true,
    "first_name": "Gustav",
    "last_name": "Magnusson",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/s4-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/s4-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/s4dota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/s4"
      }
    ]
  },
  {
    "nick_name": "SumaiL",
    "deleted_at": null,
    "id": 8600,
    "active": true,
    "first_name": "Sumail",
    "last_name": "Hassan",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/SumaiL-dota2-PAK-Sumail-Hassan.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/SumaiL-dota2-PAK-Sumail-Hassan.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "2",
        "from": "2018-03-12",
        "to": null
      },
      {
        "name": "3",
        "from": "2017-12-20",
        "to": "2018-03-12"
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2017-12-20"
      }
    ],
    "country": {
      "name": "Pakistan",
      "short_name": "PK",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Pakistan.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Pakistan.png"
      },
      "region": {
        "id": 7,
        "name": "Western Asia",
        "short_name": "WA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/SumaaaaiL"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/demondoto"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/sumaildoto"
      }
    ]
  },
  {
    "nick_name": "Arteezy",
    "deleted_at": null,
    "id": 8601,
    "active": true,
    "first_name": "Artour",
    "last_name": "Babaev",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Arteezy-dota2--CAN-Artour-Babaev.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Arteezy-dota2--CAN-Artour-Babaev.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1",
        "from": "2017-12-11",
        "to": "2017-12-11"
      },
      {
        "name": "1/2",
        "from": "2017-09-01",
        "to": "2017-12-11"
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2017-09-01"
      }
    ],
    "country": {
      "name": "Canada",
      "short_name": "CA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Canada.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Canada.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/arteezy"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/arteezydota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/arteezy"
      }
    ]
  },
  {
    "nick_name": "fy",
    "deleted_at": null,
    "id": 7618,
    "active": true,
    "first_name": "Xu",
    "last_name": "Linsen",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "3",
        "from": "2017-09-04",
        "to": "2018-03-07"
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2017-09-04"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Maybe / Somnus",
    "deleted_at": null,
    "id": 8610,
    "active": true,
    "first_name": "Lu",
    "last_name": "Yao 路垚",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Somnus-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Somnus-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Ame",
    "deleted_at": null,
    "id": 11451,
    "active": true,
    "first_name": "Wang",
    "last_name": "Chunyu",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "xNova-",
    "deleted_at": null,
    "id": 13362,
    "active": true,
    "first_name": "Yap",
    "last_name": "Jian Wei",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Malaysia",
      "short_name": "MY",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Malaysia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Malaysia.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/xNovadota"
      }
    ]
  },
  {
    "nick_name": "Chalice/Mystletainn",
    "deleted_at": null,
    "id": 24851,
    "active": true,
    "first_name": "Yang",
    "last_name": "Shenyi",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "DJ",
    "deleted_at": null,
    "id": 7607,
    "active": true,
    "first_name": "Djardel Jicko",
    "last_name": "B. Mampusti",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/DJ-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/DJ-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/DjardelJicko"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/djardelm"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/djdoto"
      }
    ]
  },
  {
    "nick_name": "iceiceice",
    "deleted_at": null,
    "id": 7617,
    "active": true,
    "first_name": "Daryl Koh",
    "last_name": "Pei Xiang",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Singapore",
      "short_name": "SG",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Singapore.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Singapore.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/iceiceicedota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/iceiceicedota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/iceiceice"
      }
    ]
  },
  {
    "nick_name": "MP",
    "deleted_at": null,
    "id": 7670,
    "active": true,
    "first_name": "Pyo",
    "last_name": "No-a",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/MP-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/MP-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "South Korea",
      "short_name": "KR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/South-Korea.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/South-Korea.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Jabz",
    "deleted_at": null,
    "id": 13238,
    "active": true,
    "first_name": "Anucha",
    "last_name": "Jirawong",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-09-12",
        "to": null
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2018-09-12"
      }
    ],
    "country": {
      "name": "Thailand",
      "short_name": "TH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Thailand.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Thailand.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Jabzdota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Jabzdota2"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/jal3z"
      }
    ]
  },
  {
    "nick_name": "Abed",
    "deleted_at": null,
    "id": 21354,
    "active": true,
    "first_name": "Abed",
    "last_name": "Azel L. Yusop",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/abed-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/abed-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/abedyusop"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Abed.Official"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/abed_dota"
      }
    ]
  },
  {
    "nick_name": "佞臣 (EloquentMinister)/ 天命 / GOD/dog",
    "deleted_at": null,
    "id": 11462,
    "active": true,
    "first_name": "Jiang",
    "last_name": "An",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Sea mew / Virus / Ego",
    "deleted_at": null,
    "id": 38520,
    "active": true,
    "first_name": "Luo",
    "last_name": "Bin",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "鹿乃 / xx / ASD",
    "deleted_at": null,
    "id": 42819,
    "active": true,
    "first_name": null,
    "last_name": null,
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Yang",
    "deleted_at": null,
    "id": 10814,
    "active": true,
    "first_name": "Zhou",
    "last_name": "Haiyang",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Paparazi",
    "deleted_at": null,
    "id": 13860,
    "active": true,
    "first_name": "Zhang",
    "last_name": "Chengjun",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Paparazi-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Paparazi-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Ori",
    "deleted_at": null,
    "id": 21850,
    "active": true,
    "first_name": "Zeng",
    "last_name": "Jiaoyang",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Pain/Fade",
    "deleted_at": null,
    "id": 24483,
    "active": true,
    "first_name": "Pan",
    "last_name": "Yi",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2016-03-25",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Dy / 丁 MC",
    "deleted_at": null,
    "id": 35670,
    "active": true,
    "first_name": "Ding",
    "last_name": "Cong",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-09-09",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "ryOyr",
    "deleted_at": null,
    "id": 7632,
    "active": true,
    "first_name": "Ryo",
    "last_name": "Hasegawa",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-02-01",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-01-01"
      }
    ],
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "ninjaboogie",
    "deleted_at": null,
    "id": 21143,
    "active": true,
    "first_name": "Michael",
    "last_name": "Ross Jr.",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/ninjaboogiee"
      }
    ]
  },
  {
    "nick_name": "Gabbi",
    "deleted_at": null,
    "id": 21362,
    "active": true,
    "first_name": "Khim",
    "last_name": "Villafuerte",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/gabbidoto"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/gabbidota"
      }
    ]
  },
  {
    "nick_name": "TIMS",
    "deleted_at": null,
    "id": 23678,
    "active": true,
    "first_name": "Timothy",
    "last_name": "Randrup",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/TimsDOTA"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/timsrandrup"
      }
    ]
  },
  {
    "nick_name": "Armel / G",
    "deleted_at": null,
    "id": 23882,
    "active": true,
    "first_name": "Armel Paul",
    "last_name": "Tabios",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Philippines",
      "short_name": "PH",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Philippines.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Philippines.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "March",
    "deleted_at": null,
    "id": 7672,
    "active": true,
    "first_name": null,
    "last_name": null,
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [],
    "country": {
      "name": "South Korea",
      "short_name": "KR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/South-Korea.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/South-Korea.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Fear",
    "deleted_at": null,
    "id": 8597,
    "active": true,
    "first_name": "Clinton",
    "last_name": "Loomis",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Fear-dota2--USA-Clinton-Loomis.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Fear-dota2--USA-Clinton-Loomis.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2017-09-01",
        "to": null
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2016-09-14"
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/FearDotA"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/FearDotA"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/feardota"
      }
    ]
  },
  {
    "nick_name": "Forev",
    "deleted_at": null,
    "id": 11677,
    "active": true,
    "first_name": "Sang-don",
    "last_name": "Lee",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "South Korea",
      "short_name": "KR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/South-Korea.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/South-Korea.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/ForevDoto"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/forev"
      }
    ]
  },
  {
    "nick_name": "Moo",
    "deleted_at": null,
    "id": 22748,
    "active": true,
    "first_name": "David",
    "last_name": "Hull",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2018-05-27",
        "to": null
      },
      {
        "name": "3",
        "from": "2018-03-08",
        "to": "2018-05-26"
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/moodota2"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/moodota2"
      }
    ]
  },
  {
    "nick_name": "bryle",
    "deleted_at": null,
    "id": 36083,
    "active": true,
    "first_name": null,
    "last_name": null,
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2018-03-08",
        "to": null
      }
    ],
    "country": {
      "name": "Canada",
      "short_name": "CA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Canada.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Canada.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "LeoStyle / DrakeNN /R o c k s t a r",
    "deleted_at": null,
    "id": 11407,
    "active": true,
    "first_name": "Leonardo",
    "last_name": "Sifuentes",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Matthew",
    "deleted_at": null,
    "id": 11579,
    "active": true,
    "first_name": "Farith",
    "last_name": "Puente",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/MatthewDota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/matthewdota"
      }
    ]
  },
  {
    "nick_name": "Prada/shecciD",
    "deleted_at": null,
    "id": 11581,
    "active": true,
    "first_name": null,
    "last_name": null,
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4/5",
        "from": "2018-04-06",
        "to": null
      }
    ],
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Atun",
    "deleted_at": null,
    "id": 17308,
    "active": true,
    "first_name": "Juan",
    "last_name": "Ochoa",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2018-04-06",
        "to": null
      },
      {
        "name": "2",
        "from": "2015-12-01",
        "to": "2018-04-05"
      }
    ],
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Tomoki",
    "deleted_at": null,
    "id": 37408,
    "active": true,
    "first_name": "Frank",
    "last_name": "Arias",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [],
    "country": {
      "name": "Canada",
      "short_name": "CA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Canada.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Canada.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "w33",
    "deleted_at": null,
    "id": 7596,
    "active": true,
    "first_name": "Omar",
    "last_name": "Aliwi",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/w33-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/w33-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Romania",
      "short_name": "RO",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Romania.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Romania.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/w33haa"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/w33haa"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/w33haa"
      }
    ]
  },
  {
    "nick_name": "MiSeRy",
    "deleted_at": null,
    "id": 7597,
    "active": true,
    "first_name": "Rasmus",
    "last_name": "Filipsen",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/MISERY-dota2-DNK-Rasmus-Filipsen.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/MISERY-dota2-DNK-Rasmus-Filipsen.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-09-18",
        "to": null
      },
      {
        "name": "4",
        "from": "2018-06-05",
        "to": "2018-09-18"
      },
      {
        "name": "5",
        "from": "2017-12-20",
        "to": "2018-06-04"
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2017-12-20"
      }
    ],
    "country": {
      "name": "Denmark",
      "short_name": "DK",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Denmark.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Denmark.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/MiSeRyDOTA"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/MiseryDota2"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/miserydota"
      }
    ]
  },
  {
    "nick_name": "hFn",
    "deleted_at": null,
    "id": 7636,
    "active": true,
    "first_name": "William",
    "last_name": "Medeiros",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "1/2",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Brazil",
      "short_name": "BR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Brazil.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Brazil.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/hFnk4"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/hFnk3"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/hfndota"
      }
    ]
  },
  {
    "nick_name": "Tavo",
    "deleted_at": null,
    "id": 7637,
    "active": true,
    "first_name": "Otavio",
    "last_name": "Gabriel",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Brazil",
      "short_name": "BR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Brazil.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Brazil.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/tavodota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/tavodota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/thetavo"
      }
    ]
  },
  {
    "nick_name": "KINGRD",
    "deleted_at": null,
    "id": 11562,
    "active": true,
    "first_name": "Danylo",
    "last_name": "Nascimento",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "5",
        "from": "2017-09-13",
        "to": "2018-03-07"
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2017-08-29"
      }
    ],
    "country": {
      "name": "Brazil",
      "short_name": "BR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Brazil.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Brazil.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Kingrdxd"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Kingrdxd"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/kingrdxd"
      }
    ]
  },
  {
    "nick_name": "Fenrir",
    "deleted_at": null,
    "id": 7619,
    "active": true,
    "first_name": "Lu",
    "last_name": "Chao",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Sylar",
    "deleted_at": null,
    "id": 8608,
    "active": true,
    "first_name": "Liu",
    "last_name": "Jiajun",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Xxs",
    "deleted_at": null,
    "id": 10779,
    "active": true,
    "first_name": "Lin",
    "last_name": "Jing",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-09-10",
        "to": null
      },
      {
        "name": "2",
        "from": "2018-03-08",
        "to": "2018-09-10"
      },
      {
        "name": "3",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "BoBoKa",
    "deleted_at": null,
    "id": 10781,
    "active": true,
    "first_name": "Ye",
    "last_name": "Zhibiao",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-09-10",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-09-10"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "mtu/loveyouloveme ",
    "deleted_at": null,
    "id": 30679,
    "active": true,
    "first_name": "Gao ",
    "last_name": "Yuan",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2018-11-02",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Resolut1on",
    "deleted_at": null,
    "id": 7662,
    "active": true,
    "first_name": "Roman",
    "last_name": "Fominok",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Resolut1on-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Resolut1on-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "2",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Ukraine",
      "short_name": "UA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Ukraine.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Ukraine.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Resolut1on_"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/resolut1ontv"
      }
    ]
  },
  {
    "nick_name": "Universe",
    "deleted_at": null,
    "id": 8599,
    "active": true,
    "first_name": "Saahil",
    "last_name": "Arora",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Universe-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Universe-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/UniverseDota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/EGUniverse-1417797578434526"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/universedota"
      }
    ]
  },
  {
    "nick_name": "SVG",
    "deleted_at": null,
    "id": 8688,
    "active": true,
    "first_name": "Avery ",
    "last_name": "Silverman ",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-03-08",
        "to": null
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/SVGDota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/SVGDota"
      }
    ]
  },
  {
    "nick_name": "YawaR / Aśoka ~ / YS",
    "deleted_at": null,
    "id": 10821,
    "active": true,
    "first_name": "Yawar",
    "last_name": "Hassan",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Pakistan",
      "short_name": "PK",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Pakistan.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Pakistan.png"
      },
      "region": {
        "id": 7,
        "name": "Western Asia",
        "short_name": "WA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/yawar_ys"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/yawar_"
      }
    ]
  },
  {
    "nick_name": "MSS",
    "deleted_at": null,
    "id": 13404,
    "active": true,
    "first_name": "Arif",
    "last_name": "Anwar",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "3",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/MSSDota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/MSSDota"
      }
    ]
  },
  {
    "nick_name": "CemaTheSlayeR",
    "deleted_at": null,
    "id": 7649,
    "active": true,
    "first_name": "Semion",
    "last_name": "Krivulya",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Ukraine",
      "short_name": "UA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Ukraine.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Ukraine.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/c_slayerRR"
      }
    ]
  },
  {
    "nick_name": "KingR",
    "deleted_at": null,
    "id": 11923,
    "active": true,
    "first_name": "Rinat",
    "last_name": "Abdullin",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-05-29",
        "to": null
      },
      {
        "name": "4",
        "from": "2018-03-08",
        "to": "2018-05-29"
      },
      {
        "name": "5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/R1nater"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/kingrdoto"
      }
    ]
  },
  {
    "nick_name": "Ghostik",
    "deleted_at": null,
    "id": 11932,
    "active": true,
    "first_name": "Andrey",
    "last_name": "Kadyk",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Ukraine",
      "short_name": "UA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Ukraine.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Ukraine.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Ghostikdota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/ghostik"
      }
    ]
  },
  {
    "nick_name": "Ceyler",
    "deleted_at": null,
    "id": 28182,
    "active": true,
    "first_name": null,
    "last_name": null,
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Naive-",
    "deleted_at": null,
    "id": 41620,
    "active": true,
    "first_name": "Aybek",
    "last_name": "Tokaev",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Kazakhstan",
      "short_name": "KZ",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Kazakhstan.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Kazakhstan.png"
      },
      "region": {
        "id": 7,
        "name": "Western Asia",
        "short_name": "WA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "qojqva",
    "deleted_at": null,
    "id": 15974,
    "active": true,
    "first_name": "Max",
    "last_name": "Broecker",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/qojqva-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/qojqva-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-06-03",
        "to": null
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2018-06-03"
      }
    ],
    "country": {
      "name": "Germany",
      "short_name": "DE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Germany.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Germany.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "iNsania",
    "deleted_at": null,
    "id": 21041,
    "active": true,
    "first_name": "Aydin",
    "last_name": "Sarkohi",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4/5",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/insan1a"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/iNsaniaDotA"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/insan1a"
      }
    ]
  },
  {
    "nick_name": "miCKe",
    "deleted_at": null,
    "id": 23696,
    "active": true,
    "first_name": "Micke",
    "last_name": "Nguyen",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-06-03",
        "to": null
      },
      {
        "name": "2",
        "from": "2016-08-16",
        "to": "2018-06-03"
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Boxi",
    "deleted_at": null,
    "id": 24736,
    "active": true,
    "first_name": "Samuel",
    "last_name": "Svahn",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-03-08",
        "to": null
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/boxi98"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/boxi98"
      }
    ]
  },
  {
    "nick_name": "Taiga",
    "deleted_at": null,
    "id": 30209,
    "active": true,
    "first_name": "Tommy",
    "last_name": "Le",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4/5",
        "from": "2018-03-08",
        "to": null
      }
    ],
    "country": {
      "name": "Norway",
      "short_name": "NO",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Norway.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Norway.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Taigadota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/taiga_"
      }
    ]
  },
  {
    "nick_name": "Era",
    "deleted_at": null,
    "id": 7650,
    "active": true,
    "first_name": "Adrian",
    "last_name": "Kryeziu",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-03-07",
        "to": null
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/eradota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/EraDota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/era17"
      }
    ]
  },
  {
    "nick_name": "jonassomfan",
    "deleted_at": null,
    "id": 7652,
    "active": true,
    "first_name": "Jonas",
    "last_name": "Lindholm",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/jonassomfan"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Jonassomfan"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/jonassomfan"
      }
    ]
  },
  {
    "nick_name": "Handsken",
    "deleted_at": null,
    "id": 7653,
    "active": true,
    "first_name": "Simon",
    "last_name": "Haag",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2017-05-23",
        "to": null
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2017-05-23"
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Handsken1"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Handsken1"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/handsken"
      }
    ]
  },
  {
    "nick_name": "Chessie",
    "deleted_at": null,
    "id": 10824,
    "active": true,
    "first_name": "Rasmus",
    "last_name": "Blomdin",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "1/2",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/ChessieDota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/chessiehon"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/Chessie"
      }
    ]
  },
  {
    "nick_name": "Frost",
    "deleted_at": null,
    "id": 24740,
    "active": true,
    "first_name": "Pontus",
    "last_name": "Frost",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/NoxFrostt"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/NoxFrostt"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/noxfrostt"
      }
    ]
  },
  {
    "nick_name": "old chicken",
    "deleted_at": null,
    "id": 7621,
    "active": true,
    "first_name": "Wang",
    "last_name": "Zhiyong",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1/2",
        "from": "2018-04-08",
        "to": null
      },
      {
        "name": "2",
        "from": "2018-03-08",
        "to": "2018-04-08"
      },
      {
        "name": "1",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "eLeVeN",
    "deleted_at": null,
    "id": 7622,
    "active": true,
    "first_name": "Ren",
    "last_name": "Yangwei",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/eLeVen-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/eLeVen-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "KaKa",
    "deleted_at": null,
    "id": 7623,
    "active": true,
    "first_name": "Hu",
    "last_name": "Liangzhi",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/kaka-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/kaka-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Huliangzhi"
      }
    ]
  },
  {
    "nick_name": "一 / 荧",
    "deleted_at": null,
    "id": 25281,
    "active": true,
    "first_name": "Zhai",
    "last_name": "Jingkai 翟景凯 / Yoe",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "dark",
    "deleted_at": null,
    "id": 25282,
    "active": true,
    "first_name": "Song",
    "last_name": "Runxi 宋润熙",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "China",
      "short_name": "CN",
      "images": {
        "default": "https://img.abiosgaming.com/flags/China.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/China.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "FATA-",
    "deleted_at": null,
    "id": 7581,
    "active": true,
    "first_name": "Adrian",
    "last_name": "Trinks",
    "images": {
      "default": "https://img.abiosgaming.com/casters/Fata-dota2-DEU-Adrian-Trinks.png",
      "thumbnail": "https://img.abiosgaming.com/casters/thumbnails/Fata-dota2-DEU-Adrian-Trinks.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "2",
        "from": "2018-09-15",
        "to": null
      },
      {
        "name": "3",
        "from": "2018-03-08",
        "to": "2018-09-15"
      },
      {
        "name": "2",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Germany",
      "short_name": "DE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Germany.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Germany.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/DotaFata"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/dota2fata"
      }
    ]
  },
  {
    "nick_name": "Saksa",
    "deleted_at": null,
    "id": 8584,
    "active": true,
    "first_name": "Martin",
    "last_name": "Sazdov",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-09-15",
        "to": null
      },
      {
        "name": "5",
        "from": "2013-03-14",
        "to": "2018-09-15"
      }
    ],
    "country": {
      "name": "Macedonia",
      "short_name": "MK",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Macedonia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Macedonia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Saksadota"
      }
    ]
  },
  {
    "nick_name": "PPD",
    "deleted_at": null,
    "id": 8595,
    "active": true,
    "first_name": "Peter",
    "last_name": "Dager",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/ppd-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/ppd-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Peterpandam"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/peterpandam"
      }
    ]
  },
  {
    "nick_name": "Ace",
    "deleted_at": null,
    "id": 11963,
    "active": true,
    "first_name": "Marcus",
    "last_name": "Hoelgaard",
    "images": {
      "default": "https://img.abiosgaming.com/casters/Ace-dota2-DNK-marcus-hoelgaard.png",
      "thumbnail": "https://img.abiosgaming.com/casters/thumbnails/Ace-dota2-DNK-marcus-hoelgaard.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Denmark",
      "short_name": "DK",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Denmark.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Denmark.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/AceDota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/TeamSecretAce"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/aceyouknow"
      }
    ]
  },
  {
    "nick_name": "33",
    "deleted_at": null,
    "id": 24551,
    "active": true,
    "first_name": "Neta",
    "last_name": "Shapira",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/33-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/33-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-09-15",
        "to": null
      },
      {
        "name": "3/4",
        "from": "2018-03-08",
        "to": "2018-09-15"
      },
      {
        "name": "3",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Israel",
      "short_name": "IL",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Israel.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Israel.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/33Dota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/33dota"
      }
    ]
  },
  {
    "nick_name": "Papita",
    "deleted_at": null,
    "id": 11411,
    "active": true,
    "first_name": "Mariano",
    "last_name": "Caneda",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-06-15",
        "to": null
      },
      {
        "name": "2",
        "from": "2018-03-08",
        "to": "2018-06-15"
      },
      {
        "name": "3",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "Argentina",
      "short_name": "AR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Argentina.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Argentina.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/p4pitaDOTA"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/p4pita"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/p4pita"
      }
    ]
  },
  {
    "nick_name": "Mason",
    "deleted_at": null,
    "id": 13403,
    "active": true,
    "first_name": "Mason",
    "last_name": "Venne",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Timado",
    "deleted_at": null,
    "id": 23750,
    "active": true,
    "first_name": "Enzo",
    "last_name": "Gianoli",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Wu/ xSy",
    "deleted_at": null,
    "id": 27137,
    "active": true,
    "first_name": "Romel",
    "last_name": "Quinteros",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "MoOz",
    "deleted_at": null,
    "id": 37768,
    "active": true,
    "first_name": "Joel",
    "last_name": "Mori Ozambela",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-09-06",
        "to": null
      }
    ],
    "country": {
      "name": "Peru",
      "short_name": "PE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Peru.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Peru.png"
      },
      "region": {
        "id": 4,
        "name": "South America",
        "short_name": "SA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "pieliedie",
    "deleted_at": null,
    "id": 7599,
    "active": true,
    "first_name": "Johan",
    "last_name": "Åström",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/pieliedie-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/pieliedie-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "5",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/PieLieDieDota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/pieliediedota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/pieliedie"
      }
    ]
  },
  {
    "nick_name": "Febby",
    "deleted_at": null,
    "id": 7673,
    "active": true,
    "first_name": "Yong-min",
    "last_name": "Kim",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/Febby-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/Febby-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "South Korea",
      "short_name": "KR",
      "images": {
        "default": "https://img.abiosgaming.com/flags/South-Korea.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/South-Korea.png"
      },
      "region": {
        "id": 8,
        "name": "East Asia",
        "short_name": "EA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/Febbydota"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/febbydoto"
      }
    ]
  },
  {
    "nick_name": "Kphoenii/kpii",
    "deleted_at": null,
    "id": 11457,
    "active": true,
    "first_name": "Damien",
    "last_name": "Chok",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/kpiii-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/kpiii-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-03-08",
        "to": null
      }
    ],
    "country": {
      "name": "Australia",
      "short_name": "AU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Australia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Australia.png"
      },
      "region": {
        "id": 10,
        "name": "Oceania",
        "short_name": "OCE"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/kpiidota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/kpii3"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/kpii3"
      }
    ]
  },
  {
    "nick_name": "Ahjit",
    "deleted_at": null,
    "id": 21298,
    "active": true,
    "first_name": "Lai",
    "last_name": "Jay Son",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Malaysia",
      "short_name": "MY",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Malaysia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Malaysia.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/AhJit-2004881129734926"
      }
    ]
  },
  {
    "nick_name": "NaNa/Moon",
    "deleted_at": null,
    "id": 21299,
    "active": true,
    "first_name": "Kam",
    "last_name": "Boon Seng",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Malaysia",
      "short_name": "MY",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Malaysia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Malaysia.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/MoonDota"
      }
    ]
  },
  {
    "nick_name": "SoNNeikO",
    "deleted_at": null,
    "id": 7579,
    "active": true,
    "first_name": "Akbar",
    "last_name": "Butaev",
    "images": {
      "default": "https://img.abiosgaming.com/competitors/SoNNeikO-player-picture.png",
      "thumbnail": "https://img.abiosgaming.com/competitors/thumbnails/SoNNeikO-player-picture.png",
      "fallback": false
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-09-01",
        "to": null
      },
      {
        "name": "4",
        "from": "2013-03-14",
        "to": "2018-09-01"
      }
    ],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/sonneiko_o"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/sonneiko"
      }
    ]
  },
  {
    "nick_name": "Chuvash",
    "deleted_at": null,
    "id": 23578,
    "active": true,
    "first_name": "Evgeniy",
    "last_name": "Makarov",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Russia",
      "short_name": "RU",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Russia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Russia.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Blizzy",
    "deleted_at": null,
    "id": 24635,
    "active": true,
    "first_name": "Džoni",
    "last_name": "Ri",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "3",
        "from": "2018-03-08",
        "to": null
      }
    ],
    "country": {
      "name": "Kyrgyzstan",
      "short_name": "KG",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Kyrgyzstan.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Kyrgyzstan.png"
      },
      "region": {
        "id": 7,
        "name": "Western Asia",
        "short_name": "WA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Angel/Crystallize",
    "deleted_at": null,
    "id": 25811,
    "active": true,
    "first_name": null,
    "last_name": null,
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2017-01-01",
        "to": null
      }
    ],
    "country": {
      "name": "Ukraine",
      "short_name": "UA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Ukraine.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Ukraine.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/crystallize99"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/crystallize"
      }
    ]
  },
  {
    "nick_name": "magicaL",
    "deleted_at": null,
    "id": 29239,
    "active": true,
    "first_name": "Ivan",
    "last_name": "Vardanyan",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2018-09-04",
        "to": null
      }
    ],
    "country": {
      "name": "Ukraine",
      "short_name": "UA",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Ukraine.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Ukraine.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "Limmp",
    "deleted_at": null,
    "id": 7651,
    "active": true,
    "first_name": "Linus",
    "last_name": "Blomdin",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "2",
        "from": "2013-03-14",
        "to": null
      }
    ],
    "country": {
      "name": "Sweden",
      "short_name": "SE",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Sweden.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Sweden.png"
      },
      "region": {
        "id": 1,
        "name": "Europe",
        "short_name": "EU"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/LimmpDota"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/Limmpz"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/limmp"
      }
    ]
  },
  {
    "nick_name": "Zfreek",
    "deleted_at": null,
    "id": 10826,
    "active": true,
    "first_name": "Zakari",
    "last_name": "Freedman",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "4",
        "from": "2018-03-08",
        "to": null
      },
      {
        "name": "5",
        "from": "2013-03-14",
        "to": "2018-03-07"
      }
    ],
    "country": {
      "name": "United States",
      "short_name": "US",
      "images": {
        "default": "https://img.abiosgaming.com/flags/United-States.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/United-States.png"
      },
      "region": {
        "id": 2,
        "name": "North America",
        "short_name": "NA"
      }
    },
    "race": null,
    "social_media_accounts": [
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": "https://twitter.com/coL_zfreek"
      },
      {
        "name": "Facebook",
        "slug": "facebook",
        "url": "https://www.facebook.com/ZFreek94"
      },
      {
        "name": "Twitch",
        "slug": "twitch",
        "url": "https://www.twitch.tv/zfreek"
      }
    ]
  },
  {
    "nick_name": "Meracle",
    "deleted_at": null,
    "id": 13132,
    "active": true,
    "first_name": "Galvin",
    "last_name": "Kang Jian Wen",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "1",
        "from": "2018-03-15",
        "to": null
      },
      {
        "name": "1/2",
        "from": "2013-03-14",
        "to": "2018-03-15"
      }
    ],
    "country": {
      "name": "Singapore",
      "short_name": "SG",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Singapore.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Singapore.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "343 / Adam",
    "deleted_at": null,
    "id": 13343,
    "active": true,
    "first_name": "Adam Erwann Shah",
    "last_name": "bin Akhtar Hussein",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [
      {
        "name": "5",
        "from": "2018-05-27",
        "to": null
      },
      {
        "name": "4/5",
        "from": "2013-03-14",
        "to": "2018-05-26"
      }
    ],
    "country": {
      "name": "Malaysia",
      "short_name": "MY",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Malaysia.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Malaysia.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": []
  },
  {
    "nick_name": "deth",
    "deleted_at": null,
    "id": 27839,
    "active": true,
    "first_name": "Yang",
    "last_name": "Wu Heng",
    "images": {
      "default": "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png",
      "thumbnail": "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png",
      "fallback": true
    },
    "roles": [],
    "country": {
      "name": "Singapore",
      "short_name": "SG",
      "images": {
        "default": "https://img.abiosgaming.com/flags/Singapore.png",
        "thumbnail": "https://img.abiosgaming.com/flags/thumbnails/Singapore.png"
      },
      "region": {
        "id": 9,
        "name": "South East Asia",
        "short_name": "SEA"
      }
    },
    "race": null,
    "social_media_accounts": []
  }
];

export const mockData: IEvent[] = [
  {
    "id": 182737,
    "title": "Bracket - Grand final",
    "start": "2019-01-27 08:51:00",
    "end": "2019-01-27 12:38:14",
    "tier": 1,
    "bestOf": 5,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 1,
      "42708": 3
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 42708
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "GF",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 33618,
        "2": 42708
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      }
    ]
  },
  {
    "id": 185053,
    "title": "Showmatch",
    "start": "2019-01-27 06:49:11",
    "end": "2019-01-27 07:50:05",
    "tier": 2,
    "bestOf": 1,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20281,
    "deleted_at": null,
    "pbp_status": "possible",
    "postponed_from": null,
    "scores": {
      "198": 1,
      "15926": 0
    },
    "chain": null,
    "forfeit": {
      "198": false,
      "15926": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 198
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": null,
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 198,
        "dpc_points": 3294,
        "teams": [
          {
            "id": 1696
          }
        ],
        "players": [
          {
            "id": 10760
          },
          {
            "id": 10761
          },
          {
            "id": 15701
          },
          {
            "id": 15702
          },
          {
            "id": 15703
          }
        ]
      }
    ]
  },
  {
    "id": 182735,
    "title": "Bracket - LB Cons. final",
    "start": "2019-01-27 04:16:00",
    "end": "2019-01-27 06:05:01",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 0,
      "42708": 2
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 37949
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42708,
        "2": 37949
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      }
    ]
  },
  {
    "id": 182736,
    "title": "Bracket - LB Final",
    "start": "2019-01-26 09:58:00",
    "end": "2019-01-26 12:13:05",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 0,
      "37949": 2
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "37949": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 32674
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 37949,
        "2": 32674
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      }
    ]
  },
  {
    "id": 182743,
    "title": "Bracket - LB Semifinal",
    "start": "2019-01-26 06:58:00",
    "end": "2019-01-26 09:08:30",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "42895": 0
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 42895
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 2,
      "offset": 4,
      "seeding": {
        "1": 32674,
        "2": 42895
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      }
    ]
  },
  {
    "id": 182742,
    "title": "Bracket - LB Semifinal",
    "start": "2019-01-26 04:00:00",
    "end": "2019-01-26 06:22:34",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "42819": 0
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "42819": false
    },
    "streamed": true,
    "seeding": {
      "1": 42819,
      "2": 37949
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 2,
      "offset": 3,
      "seeding": {
        "1": 42819,
        "2": 37949
      }
    },
    "rosters": [
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      },
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      }
    ]
  },
  {
    "id": 182732,
    "title": "Bracket - UB Finals",
    "start": "2019-01-25 11:32:00",
    "end": "2019-01-25 14:42:28",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "42708": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 33618
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42708,
        "2": 33618
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      }
    ]
  },
  {
    "id": 182745,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-25 08:47:00",
    "end": "2019-01-25 10:45:15",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 0,
      "42895": 2
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 42895,
      "2": 15926
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 3,
      "offset": 6,
      "seeding": {
        "1": 42895,
        "2": 15926
      }
    },
    "rosters": [
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      },
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      }
    ]
  },
  {
    "id": 182744,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-25 04:26:00",
    "end": "2019-01-25 08:02:07",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "42642": 1
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "42642": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 37949
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 3,
      "offset": 5,
      "seeding": {
        "1": 42642,
        "2": 37949
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      }
    ]
  },
  {
    "id": 182749,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-23 10:11:00",
    "end": "2019-01-23 12:27:44",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 2,
      "45953": 0
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "45953": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 45953
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 10,
      "seeding": {
        "1": 15926,
        "2": 45953
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 45953,
        "dpc_points": 1688,
        "teams": [
          {
            "id": 2572
          }
        ],
        "players": [
          {
            "id": 7632
          },
          {
            "id": 21143
          },
          {
            "id": 21362
          },
          {
            "id": 23678
          },
          {
            "id": 23882
          }
        ]
      }
    ]
  },
  {
    "id": 182748,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-23 07:28:00",
    "end": "2019-01-23 09:39:50",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42895": 2,
      "46162": 0
    },
    "chain": null,
    "forfeit": {
      "42895": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 42895,
      "2": 46162
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 9,
      "seeding": {
        "1": 42895,
        "2": 46162
      }
    },
    "rosters": [
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      },
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      }
    ]
  },
  {
    "id": 182747,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-23 05:14:00",
    "end": "2019-01-23 07:00:05",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "46712": 0
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "46712": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 46712
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 8,
      "seeding": {
        "1": 37949,
        "2": 46712
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 46712,
        "dpc_points": 1846,
        "teams": [
          {
            "id": 16045
          }
        ],
        "players": [
          {
            "id": 11407
          },
          {
            "id": 11579
          },
          {
            "id": 11581
          },
          {
            "id": 17308
          },
          {
            "id": 37408
          }
        ]
      }
    ]
  },
  {
    "id": 182746,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-23 02:00:00",
    "end": "2019-01-23 04:44:50",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 2,
      "46961": 1
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 46961
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 7,
      "seeding": {
        "1": 42642,
        "2": 46961
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      }
    ]
  },
  {
    "id": 182734,
    "title": "Bracket - UB Semifinal",
    "start": "2019-01-22 10:40:00",
    "end": "2019-01-22 12:36:53",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42708": 2,
      "42819": 0
    },
    "chain": null,
    "forfeit": {
      "42708": false,
      "42819": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 42819
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42708,
        "2": 42819
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      }
    ]
  },
  {
    "id": 182733,
    "title": "Bracket - UB Semifinal",
    "start": "2019-01-22 07:52:00",
    "end": "2019-01-22 10:13:03",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 0,
      "33618": 2
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "33618": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 32674
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 33618,
        "2": 32674
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      }
    ]
  },
  {
    "id": 182750,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-22 06:15:00",
    "end": "2019-01-22 07:17:12",
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "44735": 0,
      "45953": 1
    },
    "chain": null,
    "forfeit": {
      "44735": false,
      "45953": false
    },
    "streamed": true,
    "seeding": {
      "1": 45953,
      "2": 44735
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 14,
      "seeding": {
        "1": 45953,
        "2": 44735
      }
    },
    "rosters": [
      {
        "id": 45953,
        "dpc_points": 1688,
        "teams": [
          {
            "id": 2572
          }
        ],
        "players": [
          {
            "id": 7632
          },
          {
            "id": 21143
          },
          {
            "id": 21362
          },
          {
            "id": 23678
          },
          {
            "id": 23882
          }
        ]
      },
      {
        "id": 44735,
        "dpc_points": 1502,
        "teams": [
          {
            "id": 46650
          }
        ],
        "players": [
          {
            "id": 7619
          },
          {
            "id": 8608
          },
          {
            "id": 10779
          },
          {
            "id": 10781
          },
          {
            "id": 30679
          }
        ]
      }
    ]
  },
  {
    "id": 182751,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-22 04:25:00",
    "end": "2019-01-22 05:51:56",
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42882": 0,
      "46162": 1
    },
    "chain": null,
    "forfeit": {
      "42882": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 42882,
      "2": 46162
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 13,
      "seeding": {
        "1": 42882,
        "2": 46162
      }
    },
    "rosters": [
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      },
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      }
    ]
  },
  {
    "id": 182752,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-22 03:14:00",
    "end": "2019-01-22 03:58:31",
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "46712": 1,
      "47066": 0
    },
    "chain": null,
    "forfeit": {
      "46712": false,
      "47066": false
    },
    "streamed": true,
    "seeding": {
      "1": 47066,
      "2": 46712
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 12,
      "seeding": {
        "1": 47066,
        "2": 46712
      }
    },
    "rosters": [
      {
        "id": 47066,
        "dpc_points": 3128,
        "teams": [
          {
            "id": 47282
          }
        ],
        "players": [
          {
            "id": 7649
          },
          {
            "id": 11923
          },
          {
            "id": 11932
          },
          {
            "id": 28182
          },
          {
            "id": 41620
          }
        ]
      },
      {
        "id": 46712,
        "dpc_points": 1846,
        "teams": [
          {
            "id": 16045
          }
        ],
        "players": [
          {
            "id": 11407
          },
          {
            "id": 11579
          },
          {
            "id": 11581
          },
          {
            "id": 17308
          },
          {
            "id": 37408
          }
        ]
      }
    ]
  },
  {
    "id": 182753,
    "title": "Bracket - Lower bracket",
    "start": "2019-01-22 02:00:00",
    "end": "2019-01-22 02:43:41",
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "38228": 0,
      "46961": 1
    },
    "chain": null,
    "forfeit": {
      "38228": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 38228,
      "2": 46961
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 11,
      "seeding": {
        "1": 38228,
        "2": 46961
      }
    },
    "rosters": [
      {
        "id": 38228,
        "dpc_points": 3164,
        "teams": [
          {
            "id": 1
          }
        ],
        "players": [
          {
            "id": 15974
          },
          {
            "id": 21041
          },
          {
            "id": 23696
          },
          {
            "id": 24736
          },
          {
            "id": 30209
          }
        ]
      },
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      }
    ]
  },
  {
    "id": 182741,
    "title": "Bracket - UB Quarterfinal",
    "start": "2019-01-21 10:37:00",
    "end": "2019-01-21 12:27:34",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "42642": 0
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "42642": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 42642
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 7,
      "seeding": {
        "1": 32674,
        "2": 42642
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      }
    ]
  },
  {
    "id": 182740,
    "title": "Bracket - UB Quarterfinal",
    "start": "2019-01-21 08:00:00",
    "end": "2019-01-21 10:02:46",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "37949": 0
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "37949": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 37949
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 6,
      "seeding": {
        "1": 33618,
        "2": 37949
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      }
    ]
  },
  {
    "id": 182739,
    "title": "Bracket - UB Quarterfinal",
    "start": "2019-01-21 04:37:00",
    "end": "2019-01-21 07:23:20",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42819": 2,
      "42895": 1
    },
    "chain": null,
    "forfeit": {
      "42819": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 42895,
      "2": 42819
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 5,
      "seeding": {
        "1": 42895,
        "2": 42819
      }
    },
    "rosters": [
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      },
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      }
    ]
  },
  {
    "id": 182738,
    "title": "Bracket - UB Quarterfinal",
    "start": "2019-01-21 02:00:00",
    "end": "2019-01-21 04:05:15",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 0,
      "42708": 2
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 42708
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 4,
      "seeding": {
        "1": 15926,
        "2": 42708
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      }
    ]
  },
  {
    "id": 182726,
    "title": "Group C - Decider match",
    "start": "2019-01-20 09:18:00",
    "end": "2019-01-20 11:05:37",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20063,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 2,
      "47066": 0
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "47066": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 47066
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42642,
        "2": 47066
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 47066,
        "dpc_points": 3128,
        "teams": [
          {
            "id": 47282
          }
        ],
        "players": [
          {
            "id": 7649
          },
          {
            "id": 11923
          },
          {
            "id": 11932
          },
          {
            "id": 28182
          },
          {
            "id": 41620
          }
        ]
      }
    ]
  },
  {
    "id": 182728,
    "title": "Group D - Decider match",
    "start": "2019-01-20 07:55:00",
    "end": "2019-01-20 10:31:53",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20064,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "38228": 1
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "38228": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 38228
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 37949,
        "2": 38228
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 38228,
        "dpc_points": 3164,
        "teams": [
          {
            "id": 1
          }
        ],
        "players": [
          {
            "id": 15974
          },
          {
            "id": 21041
          },
          {
            "id": 23696
          },
          {
            "id": 24736
          },
          {
            "id": 30209
          }
        ]
      }
    ]
  },
  {
    "id": 182722,
    "title": "Group C - Winners' match",
    "start": "2019-01-20 06:30:00",
    "end": "2019-01-20 08:41:06",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20063,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 2,
      "42642": 0
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "42642": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 42642
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 15926,
        "2": 42642
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      }
    ]
  },
  {
    "id": 182725,
    "title": "Group C - Losers' match",
    "start": "2019-01-20 06:30:00",
    "end": "2019-01-20 08:28:32",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20063,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "46162": 0,
      "47066": 2
    },
    "chain": null,
    "forfeit": {
      "46162": false,
      "47066": false
    },
    "streamed": true,
    "seeding": {
      "1": 47066,
      "2": 46162
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 47066,
        "2": 46162
      }
    },
    "rosters": [
      {
        "id": 47066,
        "dpc_points": 3128,
        "teams": [
          {
            "id": 47282
          }
        ],
        "players": [
          {
            "id": 7649
          },
          {
            "id": 11923
          },
          {
            "id": 11932
          },
          {
            "id": 28182
          },
          {
            "id": 41620
          }
        ]
      },
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      }
    ]
  },
  {
    "id": 182729,
    "title": "Group D - Losers' match",
    "start": "2019-01-20 04:56:00",
    "end": "2019-01-20 07:04:49",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20064,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "38228": 2,
      "44735": 0
    },
    "chain": null,
    "forfeit": {
      "38228": false,
      "44735": false
    },
    "streamed": true,
    "seeding": {
      "1": 44735,
      "2": 38228
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 44735,
        "2": 38228
      }
    },
    "rosters": [
      {
        "id": 44735,
        "dpc_points": 1502,
        "teams": [
          {
            "id": 46650
          }
        ],
        "players": [
          {
            "id": 7619
          },
          {
            "id": 8608
          },
          {
            "id": 10779
          },
          {
            "id": 10781
          },
          {
            "id": 30679
          }
        ]
      },
      {
        "id": 38228,
        "dpc_points": 3164,
        "teams": [
          {
            "id": 1
          }
        ],
        "players": [
          {
            "id": 15974
          },
          {
            "id": 21041
          },
          {
            "id": 23696
          },
          {
            "id": 24736
          },
          {
            "id": 30209
          }
        ]
      }
    ]
  },
  {
    "id": 182727,
    "title": "Group D - Winners' match",
    "start": "2019-01-20 04:53:00",
    "end": "2019-01-20 07:16:28",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20064,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 0,
      "42895": 2
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 42895
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 37949,
        "2": 42895
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      }
    ]
  },
  {
    "id": 184212,
    "title": "Group C",
    "start": "2019-01-20 02:00:00",
    "end": "2019-01-20 05:35:19",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20063,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 2,
      "47066": 1
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "47066": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 47066
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 15926,
        "2": 47066
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 47066,
        "dpc_points": 3128,
        "teams": [
          {
            "id": 47282
          }
        ],
        "players": [
          {
            "id": 7649
          },
          {
            "id": 11923
          },
          {
            "id": 11932
          },
          {
            "id": 28182
          },
          {
            "id": 41620
          }
        ]
      }
    ]
  },
  {
    "id": 184213,
    "title": "Group C",
    "start": "2019-01-20 02:00:00",
    "end": "2019-01-20 03:57:10",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20063,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 2,
      "46162": 0
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 46162
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 42642,
        "2": 46162
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      }
    ]
  },
  {
    "id": 184214,
    "title": "Group D",
    "start": "2019-01-20 02:00:00",
    "end": "2019-01-20 03:50:10",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20064,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "44735": 0
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "44735": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 44735
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 37949,
        "2": 44735
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 44735,
        "dpc_points": 1502,
        "teams": [
          {
            "id": 46650
          }
        ],
        "players": [
          {
            "id": 7619
          },
          {
            "id": 8608
          },
          {
            "id": 10779
          },
          {
            "id": 10781
          },
          {
            "id": 30679
          }
        ]
      }
    ]
  },
  {
    "id": 184215,
    "title": "Group D",
    "start": "2019-01-20 02:00:00",
    "end": "2019-01-20 04:13:23",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20064,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "38228": 0,
      "42895": 2
    },
    "chain": null,
    "forfeit": {
      "38228": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 42895,
      "2": 38228
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 42895,
        "2": 38228
      }
    },
    "rosters": [
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      },
      {
        "id": 38228,
        "dpc_points": 3164,
        "teams": [
          {
            "id": 1
          }
        ],
        "players": [
          {
            "id": 15974
          },
          {
            "id": 21041
          },
          {
            "id": 23696
          },
          {
            "id": 24736
          },
          {
            "id": 30209
          }
        ]
      }
    ]
  },
  {
    "id": 182720,
    "title": "Group B - Decider match",
    "start": "2019-01-19 09:38:00",
    "end": "2019-01-19 12:44:59",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20062,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42708": 2,
      "42882": 1
    },
    "chain": null,
    "forfeit": {
      "42708": false,
      "42882": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 42882
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42708,
        "2": 42882
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      }
    ]
  },
  {
    "id": 182713,
    "title": "Group A - Decider match",
    "start": "2019-01-19 09:05:00",
    "end": "2019-01-19 11:05:44",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20061,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42819": 2,
      "45953": 0
    },
    "chain": null,
    "forfeit": {
      "42819": false,
      "45953": false
    },
    "streamed": true,
    "seeding": {
      "1": 45953,
      "2": 42819
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 45953,
        "2": 42819
      }
    },
    "rosters": [
      {
        "id": 45953,
        "dpc_points": 1688,
        "teams": [
          {
            "id": 2572
          }
        ],
        "players": [
          {
            "id": 7632
          },
          {
            "id": 21143
          },
          {
            "id": 21362
          },
          {
            "id": 23678
          },
          {
            "id": 23882
          }
        ]
      },
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      }
    ]
  },
  {
    "id": 182712,
    "title": "Group A - Winners' match",
    "start": "2019-01-19 05:30:00",
    "end": "2019-01-19 08:23:23",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20061,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "45953": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "45953": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 45953
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 33618,
        "2": 45953
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 45953,
        "dpc_points": 1688,
        "teams": [
          {
            "id": 2572
          }
        ],
        "players": [
          {
            "id": 7632
          },
          {
            "id": 21143
          },
          {
            "id": 21362
          },
          {
            "id": 23678
          },
          {
            "id": 23882
          }
        ]
      }
    ]
  },
  {
    "id": 182716,
    "title": "Group A - Losers' match",
    "start": "2019-01-19 05:30:00",
    "end": "2019-01-19 08:04:54",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20061,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42819": 2,
      "46961": 1
    },
    "chain": null,
    "forfeit": {
      "42819": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 42819,
      "2": 46961
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42819,
        "2": 46961
      }
    },
    "rosters": [
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      },
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      }
    ]
  },
  {
    "id": 182717,
    "title": "Group B - Winners' match",
    "start": "2019-01-19 05:30:00",
    "end": "2019-01-19 08:01:15",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20062,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "42708": 0
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 32674
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42708,
        "2": 32674
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      }
    ]
  },
  {
    "id": 182721,
    "title": "Group B - Losers' match",
    "start": "2019-01-19 05:30:00",
    "end": "2019-01-19 09:05:05",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20062,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42882": 2,
      "46712": 1
    },
    "chain": null,
    "forfeit": {
      "42882": false,
      "46712": false
    },
    "streamed": true,
    "seeding": {
      "1": 46712,
      "2": 42882
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 46712,
        "2": 42882
      }
    },
    "rosters": [
      {
        "id": 46712,
        "dpc_points": 1846,
        "teams": [
          {
            "id": 16045
          }
        ],
        "players": [
          {
            "id": 11407
          },
          {
            "id": 11579
          },
          {
            "id": 11581
          },
          {
            "id": 17308
          },
          {
            "id": 37408
          }
        ]
      },
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      }
    ]
  },
  {
    "id": 182714,
    "title": "Group A",
    "start": "2019-01-19 02:00:00",
    "end": "2019-01-19 05:09:34",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20061,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "42819": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42819": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 42819
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 33618,
        "2": 42819
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      }
    ]
  },
  {
    "id": 182715,
    "title": "Group A",
    "start": "2019-01-19 02:00:00",
    "end": "2019-01-19 03:46:02",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20061,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "45953": 2,
      "46961": 0
    },
    "chain": null,
    "forfeit": {
      "45953": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 46961,
      "2": 45953
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 46961,
        "2": 45953
      }
    },
    "rosters": [
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      },
      {
        "id": 45953,
        "dpc_points": 1688,
        "teams": [
          {
            "id": 2572
          }
        ],
        "players": [
          {
            "id": 7632
          },
          {
            "id": 21143
          },
          {
            "id": 21362
          },
          {
            "id": 23678
          },
          {
            "id": 23882
          }
        ]
      }
    ]
  },
  {
    "id": 182718,
    "title": "Group B",
    "start": "2019-01-19 02:00:00",
    "end": "2019-01-19 03:58:54",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20062,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42708": 2,
      "46712": 0
    },
    "chain": null,
    "forfeit": {
      "42708": false,
      "46712": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 46712
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42708,
        "2": 46712
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 46712,
        "dpc_points": 1846,
        "teams": [
          {
            "id": 16045
          }
        ],
        "players": [
          {
            "id": 11407
          },
          {
            "id": 11579
          },
          {
            "id": 11581
          },
          {
            "id": 17308
          },
          {
            "id": 37408
          }
        ]
      }
    ]
  },
  {
    "id": 182719,
    "title": "Group B",
    "start": "2019-01-19 02:00:00",
    "end": "2019-01-19 05:22:47",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20062,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "42882": 1
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "42882": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 42882
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 32674,
        "2": 42882
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      }
    ]
  },
  {
    "id": 179387,
    "title": "NA Playoffs - LB Cons. final",
    "start": "2018-12-01 00:59:20",
    "end": "2018-12-01 02:32:47",
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19723,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 0,
      "42882": 2
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "42882": false
    },
    "streamed": true,
    "seeding": {
      "1": 42882,
      "2": 37949
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42882,
        "2": 37949
      }
    },
    "rosters": [
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      },
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      }
    ]
  },
  {
    "id": 178957,
    "title": "NA Playoffs - LB Final",
    "start": "2018-11-30 21:05:55",
    "end": "2018-11-30 22:36:52",
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19723,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "45384": 0
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "45384": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 45384
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 37949,
        "2": 45384
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 45384,
        "dpc_points": 1852,
        "teams": [
          {
            "id": 48817
          }
        ],
        "players": []
      }
    ]
  },
  {
    "id": 179350,
    "title": "NA Playoffs - UB Finals",
    "start": "2018-11-30 21:02:55",
    "end": "2018-12-01 00:22:13",
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19723,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42882": 1,
      "46162": 2
    },
    "chain": null,
    "forfeit": {
      "42882": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 46162,
      "2": 42882
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 46162,
        "2": 42882
      }
    },
    "rosters": [
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      },
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      }
    ]
  },
  {
    "id": 178943,
    "title": "EU Playoffs - LB Cons. final",
    "start": "2018-11-30 16:48:00",
    "end": "2018-11-30 19:18:26",
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19698,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 2,
      "38228": 1
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "38228": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 38228
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 15926,
        "2": 38228
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 38228,
        "dpc_points": 3164,
        "teams": [
          {
            "id": 1
          }
        ],
        "players": [
          {
            "id": 15974
          },
          {
            "id": 21041
          },
          {
            "id": 23696
          },
          {
            "id": 24736
          },
          {
            "id": 30209
          }
        ]
      }
    ]
  },
  {
    "id": 178941,
    "title": "EU Playoffs - UB Finals",
    "start": "2018-11-30 14:07:00",
    "end": "2018-11-30 16:05:32",
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19698,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 1,
      "42708": 2
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 42708
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 15926,
        "2": 42708
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      }
    ]
  },
  {
    "id": 178942,
    "title": "EU Playoffs - LB Final",
    "start": "2018-11-30 14:07:00",
    "end": "2018-11-30 16:19:02",
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19698,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "38228": 2,
      "42546": 0
    },
    "chain": null,
    "forfeit": {
      "38228": false,
      "42546": false
    },
    "streamed": true,
    "seeding": {
      "1": 38228,
      "2": 42546
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 38228,
        "2": 42546
      }
    },
    "rosters": [
      {
        "id": 38228,
        "dpc_points": 3164,
        "teams": [
          {
            "id": 1
          }
        ],
        "players": [
          {
            "id": 15974
          },
          {
            "id": 21041
          },
          {
            "id": 23696
          },
          {
            "id": 24736
          },
          {
            "id": 30209
          }
        ]
      },
      {
        "id": 42546,
        "dpc_points": 1822,
        "teams": [
          {
            "id": 36435
          }
        ],
        "players": [
          {
            "id": 7650
          },
          {
            "id": 7652
          },
          {
            "id": 7653
          },
          {
            "id": 10824
          },
          {
            "id": 24740
          }
        ]
      }
    ]
  },
  {
    "id": 179381,
    "title": "CN Playoffs - UB Finals",
    "start": "2018-11-30 11:36:41",
    "end": "2018-11-30 12:40:00",
    "tier": 2,
    "bestOf": 1,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19725,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 0,
      "44735": 1
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "44735": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 44735
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42642,
        "2": 44735
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 44735,
        "dpc_points": 1502,
        "teams": [
          {
            "id": 46650
          }
        ],
        "players": [
          {
            "id": 7619
          },
          {
            "id": 8608
          },
          {
            "id": 10779
          },
          {
            "id": 10781
          },
          {
            "id": 30679
          }
        ]
      }
    ]
  },
  {
    "id": 179319,
    "title": "CN Playoffs - LB Cons. final",
    "start": "2018-11-30 11:31:00",
    "end": "2018-11-30 14:52:37",
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 19725,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "42819": 1
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "42819": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 42819
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 32674,
        "2": 42819
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      }
    ]
  },
  {
    "id": 189335,
    "title": "Playoffs - Grand final",
    "start": "2022-03-24 16:42:00",
    "end": null,
    "tier": 1,
    "bestOf": 5,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": "2019-03-24 16:00:55",
    "scores": {
      "33618": 2,
      "42642": 3
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42642": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 33618
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "GF",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42642,
        "2": 33618
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      }
    ]
  },
  {
    "id": 189343,
    "title": "Playoffs - LB Cons. final",
    "start": "2022-03-24 12:33:32",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "42895": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 42895,
      "2": 33618
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42895,
        "2": 33618
      }
    },
    "rosters": [
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      },
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      }
    ]
  },
  {
    "id": 189336,
    "title": "Playoffs - UB Finals",
    "start": "2022-03-23 20:35:40",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 2,
      "42895": 1
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 42895
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42642,
        "2": 42895
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      }
    ]
  },
  {
    "id": 189344,
    "title": "Playoffs - LB Final",
    "start": "2022-03-23 16:43:17",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "42708": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 33618
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42708,
        "2": 33618
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      }
    ]
  },
  {
    "id": 189345,
    "title": "Playoffs - LB Semifinal",
    "start": "2022-03-23 13:30:00",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": "2019-03-23 13:00:00",
    "scores": {
      "42708": 2,
      "44016": 0
    },
    "chain": null,
    "forfeit": {
      "42708": false,
      "44016": false
    },
    "streamed": true,
    "seeding": {
      "1": 44016,
      "2": 42708
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 2,
      "offset": 3,
      "seeding": {
        "1": 44016,
        "2": 42708
      }
    },
    "rosters": [
      {
        "id": 44016,
        "dpc_points": 2114,
        "teams": [
          {
            "id": 35958
          }
        ],
        "players": [
          {
            "id": 7621
          },
          {
            "id": 7622
          },
          {
            "id": 7623
          },
          {
            "id": 25281
          },
          {
            "id": 25282
          }
        ]
      },
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      }
    ]
  },
  {
    "id": 189346,
    "title": "Playoffs - LB Semifinal",
    "start": "2022-03-23 09:40:00",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 1,
      "33618": 2
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "33618": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 33618
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 2,
      "offset": 4,
      "seeding": {
        "1": 32674,
        "2": 33618
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      }
    ]
  },
  {
    "id": 189338,
    "title": "Playoffs - UB Semifinal",
    "start": "2022-03-22 19:45:22",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42895": 2,
      "44016": 0
    },
    "chain": null,
    "forfeit": {
      "42895": false,
      "44016": false
    },
    "streamed": true,
    "seeding": {
      "1": 44016,
      "2": 42895
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 44016,
        "2": 42895
      }
    },
    "rosters": [
      {
        "id": 44016,
        "dpc_points": 2114,
        "teams": [
          {
            "id": 35958
          }
        ],
        "players": [
          {
            "id": 7621
          },
          {
            "id": 7622
          },
          {
            "id": 7623
          },
          {
            "id": 25281
          },
          {
            "id": 25282
          }
        ]
      },
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      }
    ]
  },
  {
    "id": 189337,
    "title": "Playoffs - UB Semifinal",
    "start": "2022-03-22 15:37:08",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 1,
      "42642": 2
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "42642": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 42642
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 32674,
        "2": 42642
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      }
    ]
  },
  {
    "id": 189348,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-20 14:57:31",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "37949": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "37949": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 33618
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 3,
      "offset": 6,
      "seeding": {
        "1": 37949,
        "2": 33618
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      }
    ]
  },
  {
    "id": 189347,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-20 12:30:16",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42708": 2,
      "46162": 0
    },
    "chain": null,
    "forfeit": {
      "42708": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 46162,
      "2": 42708
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 3,
      "offset": 5,
      "seeding": {
        "1": 46162,
        "2": 42708
      }
    },
    "rosters": [
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      },
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      }
    ]
  },
  {
    "id": 189352,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-19 15:07:01",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "46961": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 46961
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 10,
      "seeding": {
        "1": 33618,
        "2": 46961
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      }
    ]
  },
  {
    "id": 189351,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-19 12:30:43",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "43081": 0
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "43081": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 43081
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 9,
      "seeding": {
        "1": 37949,
        "2": 43081
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 43081,
        "dpc_points": 2532,
        "teams": [
          {
            "id": 2394
          }
        ],
        "players": [
          {
            "id": 7581
          },
          {
            "id": 8584
          },
          {
            "id": 8595
          },
          {
            "id": 11963
          },
          {
            "id": 24551
          }
        ]
      }
    ]
  },
  {
    "id": 189350,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-18 15:31:29",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42708": 2,
      "49253": 0
    },
    "chain": null,
    "forfeit": {
      "42708": false,
      "49253": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 49253
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 8,
      "seeding": {
        "1": 42708,
        "2": 49253
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 49253,
        "dpc_points": 2954,
        "teams": [
          {
            "id": 1956
          }
        ],
        "players": [
          {
            "id": 11411
          },
          {
            "id": 13403
          },
          {
            "id": 23750
          },
          {
            "id": 27137
          },
          {
            "id": 37768
          }
        ]
      }
    ]
  },
  {
    "id": 189349,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-18 12:30:10",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "46162": 2,
      "47571": 0
    },
    "chain": null,
    "forfeit": {
      "46162": false,
      "47571": false
    },
    "streamed": true,
    "seeding": {
      "1": 47571,
      "2": 46162
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 4,
      "offset": 7,
      "seeding": {
        "1": 47571,
        "2": 46162
      }
    },
    "rosters": [
      {
        "id": 47571,
        "dpc_points": 2790,
        "teams": [
          {
            "id": 14
          }
        ],
        "players": [
          {
            "id": 7599
          },
          {
            "id": 7673
          },
          {
            "id": 11457
          },
          {
            "id": 21298
          },
          {
            "id": 21299
          }
        ]
      },
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      }
    ]
  },
  {
    "id": 189342,
    "title": "Playoffs - UB Quarterfinal",
    "start": "2022-03-17 18:52:34",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 0,
      "42895": 2
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42895": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 42895
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 7,
      "seeding": {
        "1": 33618,
        "2": 42895
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      }
    ]
  },
  {
    "id": 189341,
    "title": "Playoffs - UB Quarterfinal",
    "start": "2022-03-17 15:12:34",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 1,
      "44016": 2
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "44016": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 44016
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 6,
      "seeding": {
        "1": 37949,
        "2": 44016
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 44016,
        "dpc_points": 2114,
        "teams": [
          {
            "id": 35958
          }
        ],
        "players": [
          {
            "id": 7621
          },
          {
            "id": 7622
          },
          {
            "id": 7623
          },
          {
            "id": 25281
          },
          {
            "id": 25282
          }
        ]
      }
    ]
  },
  {
    "id": 189356,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-17 14:05:37",
    "end": null,
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 0,
      "46961": 1
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 46961
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 14,
      "seeding": {
        "1": 15926,
        "2": 46961
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      }
    ]
  },
  {
    "id": 189355,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-17 12:31:16",
    "end": null,
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42882": 0,
      "43081": 1
    },
    "chain": null,
    "forfeit": {
      "42882": false,
      "43081": false
    },
    "streamed": true,
    "seeding": {
      "1": 43081,
      "2": 42882
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 13,
      "seeding": {
        "1": 43081,
        "2": 42882
      }
    },
    "rosters": [
      {
        "id": 43081,
        "dpc_points": 2532,
        "teams": [
          {
            "id": 2394
          }
        ],
        "players": [
          {
            "id": 7581
          },
          {
            "id": 8584
          },
          {
            "id": 8595
          },
          {
            "id": 11963
          },
          {
            "id": 24551
          }
        ]
      },
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      }
    ]
  },
  {
    "id": 189340,
    "title": "Playoffs - UB Quarterfinal",
    "start": "2022-03-16 17:57:34",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 2,
      "42708": 1
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 42642
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 5,
      "seeding": {
        "1": 42708,
        "2": 42642
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      }
    ]
  },
  {
    "id": 189339,
    "title": "Playoffs - UB Quarterfinal",
    "start": "2022-03-16 15:31:34",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "47571": 0
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "47571": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 47571
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 2,
      "offset": 4,
      "seeding": {
        "1": 32674,
        "2": 47571
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 47571,
        "dpc_points": 2790,
        "teams": [
          {
            "id": 14
          }
        ],
        "players": [
          {
            "id": 7599
          },
          {
            "id": 7673
          },
          {
            "id": 11457
          },
          {
            "id": 21298
          },
          {
            "id": 21299
          }
        ]
      }
    ]
  },
  {
    "id": 189354,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-16 13:45:00",
    "end": null,
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42819": 0,
      "49253": 1
    },
    "chain": null,
    "forfeit": {
      "42819": false,
      "49253": false
    },
    "streamed": true,
    "seeding": {
      "1": 42819,
      "2": 49253
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 12,
      "seeding": {
        "1": 42819,
        "2": 49253
      }
    },
    "rosters": [
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      },
      {
        "id": 49253,
        "dpc_points": 2954,
        "teams": [
          {
            "id": 1956
          }
        ],
        "players": [
          {
            "id": 11411
          },
          {
            "id": 13403
          },
          {
            "id": 23750
          },
          {
            "id": 27137
          },
          {
            "id": 37768
          }
        ]
      }
    ]
  },
  {
    "id": 189353,
    "title": "Playoffs - Lower bracket",
    "start": "2022-03-16 12:30:48",
    "end": null,
    "tier": 1,
    "bestOf": 1,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20680,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42644": 0,
      "46162": 1
    },
    "chain": null,
    "forfeit": {
      "42644": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 42644,
      "2": 46162
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 5,
      "offset": 11,
      "seeding": {
        "1": 42644,
        "2": 46162
      }
    },
    "rosters": [
      {
        "id": 42644,
        "dpc_points": 3642,
        "teams": [
          {
            "id": 17
          }
        ],
        "players": [
          {
            "id": 7579
          },
          {
            "id": 23578
          },
          {
            "id": 24635
          },
          {
            "id": 25811
          },
          {
            "id": 29239
          }
        ]
      },
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      }
    ]
  },
  {
    "id": 189323,
    "title": "Group B - Decider match",
    "start": "2022-03-15 19:31:30",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20677,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42895": 2,
      "43081": 0
    },
    "chain": null,
    "forfeit": {
      "42895": false,
      "43081": false
    },
    "streamed": true,
    "seeding": {
      "1": 43081,
      "2": 42895
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 43081,
        "2": 42895
      }
    },
    "rosters": [
      {
        "id": 43081,
        "dpc_points": 2532,
        "teams": [
          {
            "id": 2394
          }
        ],
        "players": [
          {
            "id": 7581
          },
          {
            "id": 8584
          },
          {
            "id": 8595
          },
          {
            "id": 11963
          },
          {
            "id": 24551
          }
        ]
      },
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      }
    ]
  },
  {
    "id": 189328,
    "title": "Group C - Decider match",
    "start": "2022-03-15 18:25:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20678,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42819": 1,
      "47571": 2
    },
    "chain": null,
    "forfeit": {
      "42819": false,
      "47571": false
    },
    "streamed": true,
    "seeding": {
      "1": 47571,
      "2": 42819
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 47571,
        "2": 42819
      }
    },
    "rosters": [
      {
        "id": 47571,
        "dpc_points": 2790,
        "teams": [
          {
            "id": 14
          }
        ],
        "players": [
          {
            "id": 7599
          },
          {
            "id": 7673
          },
          {
            "id": 11457
          },
          {
            "id": 21298
          },
          {
            "id": 21299
          }
        ]
      },
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      }
    ]
  },
  {
    "id": 189334,
    "title": "Group D - Decider match",
    "start": "2022-03-15 17:49:36",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20679,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 2,
      "42644": 0
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "42644": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 42644
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42642,
        "2": 42644
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 42644,
        "dpc_points": 3642,
        "teams": [
          {
            "id": 17
          }
        ],
        "players": [
          {
            "id": 7579
          },
          {
            "id": 23578
          },
          {
            "id": 24635
          },
          {
            "id": 25811
          },
          {
            "id": 29239
          }
        ]
      }
    ]
  },
  {
    "id": 189319,
    "title": "Group A - Decider match",
    "start": "2022-03-15 17:11:04",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20676,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 0,
      "44016": 2
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "44016": false
    },
    "streamed": true,
    "seeding": {
      "1": 15926,
      "2": 44016
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 15926,
        "2": 44016
      }
    },
    "rosters": [
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      },
      {
        "id": 44016,
        "dpc_points": 2114,
        "teams": [
          {
            "id": 35958
          }
        ],
        "players": [
          {
            "id": 7621
          },
          {
            "id": 7622
          },
          {
            "id": 7623
          },
          {
            "id": 25281
          },
          {
            "id": 25282
          }
        ]
      }
    ]
  },
  {
    "id": 189324,
    "title": "Group B - Losers' match",
    "start": "2022-03-15 16:16:07",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20677,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42895": 2,
      "49253": 1
    },
    "chain": null,
    "forfeit": {
      "42895": false,
      "49253": false
    },
    "streamed": true,
    "seeding": {
      "1": 42895,
      "2": 49253
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42895,
        "2": 49253
      }
    },
    "rosters": [
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      },
      {
        "id": 49253,
        "dpc_points": 2954,
        "teams": [
          {
            "id": 1956
          }
        ],
        "players": [
          {
            "id": 11411
          },
          {
            "id": 13403
          },
          {
            "id": 23750
          },
          {
            "id": 27137
          },
          {
            "id": 37768
          }
        ]
      }
    ]
  },
  {
    "id": 189329,
    "title": "Group C - Losers' match",
    "start": "2022-03-15 16:01:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20678,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42819": 2,
      "42882": 0
    },
    "chain": null,
    "forfeit": {
      "42819": false,
      "42882": false
    },
    "streamed": true,
    "seeding": {
      "1": 42882,
      "2": 42819
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42882,
        "2": 42819
      }
    },
    "rosters": [
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      },
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      }
    ]
  },
  {
    "id": 189318,
    "title": "Group A - Losers' match",
    "start": "2022-03-15 14:51:00",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20676,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "44016": 2,
      "46162": 0
    },
    "chain": null,
    "forfeit": {
      "44016": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 44016,
      "2": 46162
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 44016,
        "2": 46162
      }
    },
    "rosters": [
      {
        "id": 44016,
        "dpc_points": 2114,
        "teams": [
          {
            "id": 35958
          }
        ],
        "players": [
          {
            "id": 7621
          },
          {
            "id": 7622
          },
          {
            "id": 7623
          },
          {
            "id": 25281
          },
          {
            "id": 25282
          }
        ]
      },
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      }
    ]
  },
  {
    "id": 189333,
    "title": "Group D - Losers' match",
    "start": "2022-03-15 14:50:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20679,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42644": 2,
      "46961": 1
    },
    "chain": null,
    "forfeit": {
      "42644": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 46961,
      "2": 42644
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 46961,
        "2": 42644
      }
    },
    "rosters": [
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      },
      {
        "id": 42644,
        "dpc_points": 3642,
        "teams": [
          {
            "id": 17
          }
        ],
        "players": [
          {
            "id": 7579
          },
          {
            "id": 23578
          },
          {
            "id": 24635
          },
          {
            "id": 25811
          },
          {
            "id": 29239
          }
        ]
      }
    ]
  },
  {
    "id": 189317,
    "title": "Group A - Winners' match",
    "start": "2022-03-15 12:33:00",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20676,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 0,
      "42708": 2
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "42708": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 15926
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42708,
        "2": 15926
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      }
    ]
  },
  {
    "id": 189322,
    "title": "Group B - Winners' match",
    "start": "2022-03-15 12:30:18",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20677,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "43081": 1
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "43081": false
    },
    "streamed": true,
    "seeding": {
      "1": 43081,
      "2": 32674
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 43081,
        "2": 32674
      }
    },
    "rosters": [
      {
        "id": 43081,
        "dpc_points": 2532,
        "teams": [
          {
            "id": 2394
          }
        ],
        "players": [
          {
            "id": 7581
          },
          {
            "id": 8584
          },
          {
            "id": 8595
          },
          {
            "id": 11963
          },
          {
            "id": 24551
          }
        ]
      },
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      }
    ]
  },
  {
    "id": 189327,
    "title": "Group C - Winners' match",
    "start": "2022-03-15 12:30:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20678,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "47571": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "47571": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 47571
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 33618,
        "2": 47571
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 47571,
        "dpc_points": 2790,
        "teams": [
          {
            "id": 14
          }
        ],
        "players": [
          {
            "id": 7599
          },
          {
            "id": 7673
          },
          {
            "id": 11457
          },
          {
            "id": 21298
          },
          {
            "id": 21299
          }
        ]
      }
    ]
  },
  {
    "id": 189332,
    "title": "Group D - Winners' match",
    "start": "2022-03-15 12:30:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20679,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "42642": 0
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "42642": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 37949
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 0,
      "offset": 1,
      "seeding": {
        "1": 42642,
        "2": 37949
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      }
    ]
  },
  {
    "id": 189321,
    "title": "Group B",
    "start": "2022-03-14 16:26:22",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20677,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "32674": 2,
      "49253": 0
    },
    "chain": null,
    "forfeit": {
      "32674": false,
      "49253": false
    },
    "streamed": true,
    "seeding": {
      "1": 32674,
      "2": 49253
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 32674,
        "2": 49253
      }
    },
    "rosters": [
      {
        "id": 32674,
        "dpc_points": 3604,
        "teams": [
          {
            "id": 11
          }
        ],
        "players": [
          {
            "id": 7618
          },
          {
            "id": 8610
          },
          {
            "id": 11451
          },
          {
            "id": 13362
          },
          {
            "id": 24851
          }
        ]
      },
      {
        "id": 49253,
        "dpc_points": 2954,
        "teams": [
          {
            "id": 1956
          }
        ],
        "players": [
          {
            "id": 11411
          },
          {
            "id": 13403
          },
          {
            "id": 23750
          },
          {
            "id": 27137
          },
          {
            "id": 37768
          }
        ]
      }
    ]
  },
  {
    "id": 189326,
    "title": "Group C",
    "start": "2022-03-14 16:17:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20678,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42819": 1,
      "47571": 2
    },
    "chain": null,
    "forfeit": {
      "42819": false,
      "47571": false
    },
    "streamed": true,
    "seeding": {
      "1": 42819,
      "2": 47571
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 42819,
        "2": 47571
      }
    },
    "rosters": [
      {
        "id": 42819,
        "dpc_points": 3992,
        "teams": [
          {
            "id": 2407
          }
        ],
        "players": [
          {
            "id": 10761
          },
          {
            "id": 11462
          },
          {
            "id": 15701
          },
          {
            "id": 38520
          },
          {
            "id": 42819
          }
        ]
      },
      {
        "id": 47571,
        "dpc_points": 2790,
        "teams": [
          {
            "id": 14
          }
        ],
        "players": [
          {
            "id": 7599
          },
          {
            "id": 7673
          },
          {
            "id": 11457
          },
          {
            "id": 21298
          },
          {
            "id": 21299
          }
        ]
      }
    ]
  },
  {
    "id": 189331,
    "title": "Group D",
    "start": "2022-03-14 14:52:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20679,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "37949": 2,
      "42644": 1
    },
    "chain": null,
    "forfeit": {
      "37949": false,
      "42644": false
    },
    "streamed": true,
    "seeding": {
      "1": 37949,
      "2": 42644
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 37949,
        "2": 42644
      }
    },
    "rosters": [
      {
        "id": 37949,
        "dpc_points": 3114,
        "teams": [
          {
            "id": 4
          }
        ],
        "players": [
          {
            "id": 7643
          },
          {
            "id": 7644
          },
          {
            "id": 7656
          },
          {
            "id": 8600
          },
          {
            "id": 8601
          }
        ]
      },
      {
        "id": 42644,
        "dpc_points": 3642,
        "teams": [
          {
            "id": 17
          }
        ],
        "players": [
          {
            "id": 7579
          },
          {
            "id": 23578
          },
          {
            "id": 24635
          },
          {
            "id": 25811
          },
          {
            "id": 29239
          }
        ]
      }
    ]
  },
  {
    "id": 189316,
    "title": "Group A",
    "start": "2022-03-14 14:51:44",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20676,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "15926": 2,
      "46162": 0
    },
    "chain": null,
    "forfeit": {
      "15926": false,
      "46162": false
    },
    "streamed": true,
    "seeding": {
      "1": 46162,
      "2": 15926
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 3,
      "seeding": {
        "1": 46162,
        "2": 15926
      }
    },
    "rosters": [
      {
        "id": 46162,
        "dpc_points": 2120,
        "teams": [
          {
            "id": 47057
          }
        ],
        "players": [
          {
            "id": 7672
          },
          {
            "id": 8597
          },
          {
            "id": 11677
          },
          {
            "id": 22748
          },
          {
            "id": 36083
          }
        ]
      },
      {
        "id": 15926,
        "dpc_points": 2212,
        "teams": [
          {
            "id": 5904
          }
        ],
        "players": [
          {
            "id": 7580
          },
          {
            "id": 7582
          },
          {
            "id": 7584
          },
          {
            "id": 7640
          },
          {
            "id": 23955
          }
        ]
      }
    ]
  },
  {
    "id": 189320,
    "title": "Group B",
    "start": "2022-03-14 12:30:22",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20677,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42895": 1,
      "43081": 2
    },
    "chain": null,
    "forfeit": {
      "42895": false,
      "43081": false
    },
    "streamed": true,
    "seeding": {
      "1": 43081,
      "2": 42895
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 43081,
        "2": 42895
      }
    },
    "rosters": [
      {
        "id": 43081,
        "dpc_points": 2532,
        "teams": [
          {
            "id": 2394
          }
        ],
        "players": [
          {
            "id": 7581
          },
          {
            "id": 8584
          },
          {
            "id": 8595
          },
          {
            "id": 11963
          },
          {
            "id": 24551
          }
        ]
      },
      {
        "id": 42895,
        "dpc_points": 3324,
        "teams": [
          {
            "id": 1854
          }
        ],
        "players": [
          {
            "id": 7607
          },
          {
            "id": 7617
          },
          {
            "id": 7670
          },
          {
            "id": 13238
          },
          {
            "id": 21354
          }
        ]
      }
    ]
  },
  {
    "id": 189325,
    "title": "Group C",
    "start": "2022-03-14 12:30:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20678,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "33618": 2,
      "42882": 1
    },
    "chain": null,
    "forfeit": {
      "33618": false,
      "42882": false
    },
    "streamed": true,
    "seeding": {
      "1": 33618,
      "2": 42882
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 33618,
        "2": 42882
      }
    },
    "rosters": [
      {
        "id": 33618,
        "dpc_points": 3882,
        "teams": [
          {
            "id": 31
          }
        ],
        "players": [
          {
            "id": 7645
          },
          {
            "id": 7646
          },
          {
            "id": 7648
          },
          {
            "id": 10730
          },
          {
            "id": 23588
          }
        ]
      },
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      }
    ]
  },
  {
    "id": 189330,
    "title": "Group D",
    "start": "2022-03-14 12:30:03",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20679,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42642": 2,
      "46961": 0
    },
    "chain": null,
    "forfeit": {
      "42642": false,
      "46961": false
    },
    "streamed": true,
    "seeding": {
      "1": 42642,
      "2": 46961
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42642,
        "2": 46961
      }
    },
    "rosters": [
      {
        "id": 42642,
        "dpc_points": 2540,
        "teams": [
          {
            "id": 30
          }
        ],
        "players": [
          {
            "id": 10814
          },
          {
            "id": 13860
          },
          {
            "id": 21850
          },
          {
            "id": 24483
          },
          {
            "id": 35670
          }
        ]
      },
      {
        "id": 46961,
        "dpc_points": 3928,
        "teams": [
          {
            "id": 50152
          }
        ],
        "players": [
          {
            "id": 7596
          },
          {
            "id": 7597
          },
          {
            "id": 7636
          },
          {
            "id": 7637
          },
          {
            "id": 11562
          }
        ]
      }
    ]
  },
  {
    "id": 189315,
    "title": "Group A",
    "start": "2022-03-14 12:30:00",
    "end": null,
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20676,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42708": 2,
      "44016": 0
    },
    "chain": null,
    "forfeit": {
      "42708": false,
      "44016": false
    },
    "streamed": true,
    "seeding": {
      "1": 42708,
      "2": 44016
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "UB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 42708,
        "2": 44016
      }
    },
    "rosters": [
      {
        "id": 42708,
        "dpc_points": 2738,
        "teams": [
          {
            "id": 1462
          }
        ],
        "players": [
          {
            "id": 7598
          },
          {
            "id": 8571
          },
          {
            "id": 11389
          },
          {
            "id": 13030
          },
          {
            "id": 13383
          }
        ]
      },
      {
        "id": 44016,
        "dpc_points": 2114,
        "teams": [
          {
            "id": 35958
          }
        ],
        "players": [
          {
            "id": 7621
          },
          {
            "id": 7622
          },
          {
            "id": 7623
          },
          {
            "id": 25281
          },
          {
            "id": 25282
          }
        ]
      }
    ]
  },
  {
    "id": 184958,
    "title": "NA Playoffs - LB Final",
    "start": "2022-02-06 23:59:00",
    "end": null,
    "tier": 2,
    "bestOf": 3,
    "tournament_id": 3431,
    "tournament_name": "DreamLeague Season 11",
    "substage_id": 20246,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
    "scores": {
      "42882": 2,
      "45455": 0
    },
    "chain": null,
    "forfeit": {
      "42882": false,
      "45455": false
    },
    "streamed": true,
    "seeding": {
      "1": 45455,
      "2": 42882
    },
    "point_system": null,
    "game": {
      "id": 1,
      "title": "Dota 2",
      "default_match_type": "team",
      "default_map": 100,
      "color": "dc6450",
      "long_title": "Dota 2",
      "deleted_at": null,
      "images": {
        "square": "https://img.abiosgaming.com/games/dota-square-logo.png",
        "circle": "https://img.abiosgaming.com/games/round-dota-logo.png",
        "rectangle": "https://img.abiosgaming.com/games/flat-rectangular-Dota-logo.jpg"
      }
    },
    "bracket_pos": {
      "part": "LB",
      "col": 1,
      "offset": 2,
      "seeding": {
        "1": 45455,
        "2": 42882
      }
    },
    "rosters": [
      {
        "id": 45455,
        "dpc_points": 2742,
        "teams": [
          {
            "id": 1625
          }
        ],
        "players": [
          {
            "id": 7651
          },
          {
            "id": 10826
          },
          {
            "id": 13132
          },
          {
            "id": 13343
          },
          {
            "id": 27839
          }
        ]
      },
      {
        "id": 42882,
        "dpc_points": 2278,
        "teams": [
          {
            "id": 46761
          }
        ],
        "players": [
          {
            "id": 7662
          },
          {
            "id": 8599
          },
          {
            "id": 8688
          },
          {
            "id": 10821
          },
          {
            "id": 13404
          }
        ]
      }
    ]
  }
];