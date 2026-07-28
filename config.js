/* =========================================================================
   THE SHREWSBURY CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "The Shrewsbury Club",
    shortName: "S",
    tagline: "Everything Your Family Plays, Under One Roof",
  },

  contact: {
    venueName: "The Shrewsbury Club",
    address: "3 Tennis Drive, Shrewsbury, MA 01545",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Shrewsbury+Club+Shrewsbury+MA",
    phone: "(508) 845-1000",
    phoneHref: "tel:+15088451000",
    email: "info@shrewsburyclub.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.shrewsbury-club.example/schedule",
      title: "Book a Court",
      subtitle: "Tennis, pickleball, racquetball or the batting cage. One screen, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor or outdoor"}, {"name": "Pickleball", "meta": "60 min \u00b7 up to 4"}, {"name": "Racquetball", "meta": "45 min \u00b7 court time"}, {"name": "Batting cage", "meta": "30 min \u00b7 per cage"}],
      fallbackEmail: {
        to: "info@shrewsburyclub.com",
        subject: "Book a Court",
        body: "Hi The Shrewsbury Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    clinics: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.shrewsbury-club.example/schedule",
      title: "Clinics & Leagues",
      subtitle: "Tennis, pickleball, racquetball or the batting cage. One screen, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor or outdoor"}, {"name": "Pickleball", "meta": "60 min \u00b7 up to 4"}, {"name": "Racquetball", "meta": "45 min \u00b7 court time"}, {"name": "Batting cage", "meta": "30 min \u00b7 per cage"}],
      fallbackEmail: {
        to: "info@shrewsburyclub.com",
        subject: "Clinics & Leagues",
        body: "Hi,\n\nI'd like to register for Clinics & Leagues.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.shrewsbury-club.example/schedule",
      title: "Register for Camp",
      subtitle: "Tennis, pickleball, racquetball or the batting cage. One screen, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor or outdoor"}, {"name": "Pickleball", "meta": "60 min \u00b7 up to 4"}, {"name": "Racquetball", "meta": "45 min \u00b7 court time"}, {"name": "Batting cage", "meta": "30 min \u00b7 per cage"}],
      fallbackEmail: {
        to: "info@shrewsburyclub.com",
        subject: "Register for Camp",
        body: "Hi,\n\nI'd like to register for Register for Camp.\n\nThank you!",
      },
    },

    youth: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.shrewsbury-club.example/schedule",
      title: "Youth Programs",
      subtitle: "Tennis, pickleball, racquetball or the batting cage. One screen, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor or outdoor"}, {"name": "Pickleball", "meta": "60 min \u00b7 up to 4"}, {"name": "Racquetball", "meta": "45 min \u00b7 court time"}, {"name": "Batting cage", "meta": "30 min \u00b7 per cage"}],
      fallbackEmail: {
        to: "info@shrewsburyclub.com",
        subject: "Youth Programs",
        body: "Hi,\n\nI'd like to register for Youth Programs.\n\nThank you!",
      },
    },

    swim: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.shrewsbury-club.example/schedule",
      title: "Book Swim Lessons",
      subtitle: "Tennis, pickleball, racquetball or the batting cage. One screen, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor or outdoor"}, {"name": "Pickleball", "meta": "60 min \u00b7 up to 4"}, {"name": "Racquetball", "meta": "45 min \u00b7 court time"}, {"name": "Batting cage", "meta": "30 min \u00b7 per cage"}],
      fallbackEmail: {
        to: "info@shrewsburyclub.com",
        subject: "Book Swim Lessons",
        body: "Hi,\n\nI'd like to register for Book Swim Lessons.\n\nThank you!",
      },
    },

    training: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.shrewsbury-club.example/schedule",
      title: "Book a Trainer",
      subtitle: "Tennis, pickleball, racquetball or the batting cage. One screen, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor or outdoor"}, {"name": "Pickleball", "meta": "60 min \u00b7 up to 4"}, {"name": "Racquetball", "meta": "45 min \u00b7 court time"}, {"name": "Batting cage", "meta": "30 min \u00b7 per cage"}],
      fallbackEmail: {
        to: "info@shrewsburyclub.com",
        subject: "Book a Trainer",
        body: "Hi,\n\nI'd like to register for Book a Trainer.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.shrewsbury-club.example/schedule",
      title: "Book a Club Tour",
      subtitle: "See the whole campus before you join. Pick a day and time that works and someone will walk you through it.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 indoor or outdoor"}, {"name": "Pickleball", "meta": "60 min \u00b7 up to 4"}, {"name": "Racquetball", "meta": "45 min \u00b7 court time"}, {"name": "Batting cage", "meta": "30 min \u00b7 per cage"}],
      fallbackEmail: {
        to: "info@shrewsburyclub.com",
        subject: "Book a Club Tour",
        body: "Hi The Shrewsbury Club,\n\nI'm interested in Book a Club Tour.\n\nThank you!",
      },
    },
  },
};
