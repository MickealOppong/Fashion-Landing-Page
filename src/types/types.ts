type Link = {
  url: string, text: string
}
export type navMenu = [
  {
    title: string,
    url: string,
    menu?: [
      {
        title?: string,
        links: Link[]
      }]
  },
  {
    title: string,
    url: string,
    menu?: [
      {
        title?: string,
        links: Link[]
      },
      {
        title?: string,
        links: Link[]
      }
    ]
  },
  {
    title: string,
    url: string,
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
    menu?: [{
      title?: string,
      links: Link[]
    }]
  },
  {
    title: string,
    url: string,
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