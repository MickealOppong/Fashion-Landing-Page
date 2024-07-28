type Link = {
  url: string, text: string
}
type Deal = {
  title: string,
  text: string,
  img: string
  url: string
}
export type navMenu = [
  {
    title: string,
    url: string,
    deal?: Deal[],
    menu?: [
      {
        title?: string,
        links: Link[]
      }]
  },
  {
    title: string,
    url: string,
    deal?: Deal[],
    menu?: [
      {
        title?: string,
        links: Link[]
      },
      {
        title?: string,
        links: Link[]
      }
    ],
  },
  {
    title: string,
    url: string,
    deal?: Deal[],
    menu?: [
      {
        title?: string,
        links: Link[]
      }
    ]
  },
  {
    title: string,
    url: string,
    deal?: Deal[],
    menu?: [{
      title?: string,
      links: Link[]
    }]
  },
  {
    title: string,
    url: string,
    deal?: Deal[],
    menu?: [{
      title?: string,
      links: Link[]
    }]
  },
]


export type Footer = [
  {

    title: string;
    links: [{
      text: string,
      url: string
    },
      {
        text: string,
        url: string
      },
      {
        text: string,
        url: string
      },
      {
        text: string,
        url: string
      },

      {
        text: string,
        url: string
      }
    ]
  },
  {

    title: string;
    links: [{
      text: string,
      url: string
    },
      {
        text: string,
        url: string
      },
      {
        text: string,
        url: string
      },
      {
        text: string,
        url: string
      },
      {
        text: string,
        url: string
      }]
  },
  {

    title: string;
    links: [{
      text: string,
      url: string
    },
      {
        text: string,
        url: string
      },

      {
        text: string,
        url: string
      },

      {
        text: string,
        url: string
      },
      {
        text: string,
        url: string
      }]
  }
]