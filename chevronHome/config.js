window.CONFIG = {
  macros: [
    {
      category: 'Entertainment',
      name: 'Home',
      triggers: [
        'h',
        'ho',
        'home',
      ],
      key: 'KeyH',
      icon: 'home',
      url: 'https://law-dawg360.github.io/indexes/Home.html',
      normalisedURL: 'law-dawg360.github.io/indexes/Home.html',
      commands: {
        go: {
          template: 'https://law-dawg360.github.io/{$}',
          description: 'go to home'
        },
        search: {
          template: '{@}/indexes/Home.html{$}'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#f30002'
      },
      textColor: '#212121',
      pinned: true
    },
    {
      category: 'Communication',
      name: 'Telegram',
      icon: 'telegram',
      url: 'http://t.me',
      normalisedURL: 't.me',
      triggers: [
        'm',
        'tm',
        'tg',
        'teleg',
        'telega',
        'telegram'
      ],
      key: 'KeyM',
      commands: {
        go: {
          template: '{@}/{$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'radial',
        colors: ['#29aaed', '#25a4e2'],
        stops: [40, 100]
      },
      textColor: '#fff',
      pinned: true
    },
    {
      category: 'Programming',
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com',
      normalisedURL: 'github.com',
      triggers: [
        'g',
        'git',
        'github'
      ],
      key: 'KeyG',
      commands: {
        go: {
          template: '{@}/{$}',
          description: 'go to user'
        },
        search: {
          template: '{@}/search?q={$}'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#171515'
      },
      textColor: '#e8e8e8',
      pinned: true
    },
    {
      category: 'Programming',
      name: 'ChatGPT',
      icon: 'chatGPT',
      url: 'https://chat.openai.com/chat',
      normalisedURL: 'openai.com',
      triggers: [
        'c',
        'chat',
        'gpt',
        'cgpt',
        'chatgpt'
      ],
      key: 'KeyC',
      bgColor: {
        type: 'solid',
        color: '#70a597',
      },
      textColor: '#f7f7f7',
      pinned: true
    },
    {
      category: 'Communication',
      name: 'Gmail',
      icon: 'gmail',
      url: 'https://gmail.com',
      normalisedURL: 'gmail.com',
      triggers: [
        'em',
        'gm',
        'mail',
        'gmail'
      ],
      key: 'KeyE',
      commands: {
        search: {
          template: '{@}/#search/{$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        angle: 45,
        colors: ['#df493b', '#e8e8e8'],
        stops: [50, 100]
      },
      textColor: '#e8e8e8',
      pinned: true
    },
    {
      category: 'Education',
      name: 'Wikipedia',
      icon: 'wikipedia',
      triggers: [
        'wi',
        'wiki',
        'wikipedia'
      ],
      url: 'https://www.wikipedia.org',
      normalisedURL: 'wikipedia.org',
      commands: {
        search: {
          template: '{@}/?search={$}'
        },
        go: {
          template: '{@}/wiki/{$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#e1e1e3', '#bbb'],
        stops: [60, 100]
      },
      textColor: '#000',
      pinned: true
    },
    {
      category: 'Search',
      name: 'DuckDuckGo',
      triggers: [
        'dd',
        'ddg',
        'duck',
        'duckduck',
        'duckduckgo'
      ],
      url: 'https://duckduckgo.com',
      normalisedURL: 'duckduckgo.com',
      commands: {
        search: {
          template: '{@}/?q={$}'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#e37151'
      },
      textColor: '#e8e8e8'
    },
    {
      category: 'Search',
      name: 'Bing',
      triggers: [
        'b',
        'bing',
      ],
      url: 'https://www.bing.com',
      normalisedURL: 'bing.com',
      commands: {
        search: {
          template: '{@}/search?q={$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#3ab0f1', '#2351dd', '#40d1da']
      },
      textColor: '#e8e8e8'
    },
  ],
  commands: [
    {
      type: 'search',
      trigger: '?'
    },
    {
      type: 'go',
      trigger: '/'
    }
  ],
  engines: {
    google: {
      name: 'Google',
      bgColor: {
        type: 'solid',
        color: '#aaa'
      },
      textColor: '#fff',
      types: {
        // @ - origin query (what user typed); $ - final query (what is in the query field (selected))
        query: {
          template: 'https://www.google.com/search?q={$}'
        },
        calculator: {
          template: 'https://www.google.com/search?q={@}'
        },
        currency: {
          template: 'https://www.google.com/search?q={@}'
        }
      }
    },
    duckDuckGo: {
      name: 'DuckDuckGo',
      bgColor: {
        type: 'solid',
        color: '#e37151'
      },
      textColor: '#e8e8e8',
      types: {
        query: {
          template: 'https://duckduckgo.com/?q={$}'
        },
        calculator: {
          template: 'https://duckduckgo.com/?q={@}'
        },
        currency: {
          template: 'https://duckduckgo.com/?q={@}'
        }
      }
    },
    yandex: {
      name: 'Yandex',
      bgColor: {
        type: 'solid',
        color: '#fc3f1d'
      },
      textColor: '#000',
      types: {
        query: {
          template: 'https://ya.ru/search/?text={$}'
        },
        calculator: {
          template: 'https://ya.ru/search/?text={@}'
        },
        currency: {
          template: 'https://ya.ru/search/?text={@}'
        }
      }
    },
    qwant: {
      name: 'Qwant',
      bgColor: {
        type: 'solid',
        color: '#5992f7'
      },
      textColor: '#000',
      types: {
        query: {
          template: 'https://www.qwant.com/?q={$}'
        },
        calculator: {
          template: 'https://www.qwant.com/?q={@}'
        },
        currency: {
          template: 'https://www.qwant.com/?q={@}'
        }
      }
    },
    bing: {
      name: 'Bing',
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#3ab0f1', '#2351dd', '#40d1da']
      },
      textColor: '#e8e8e8',
      types: {
        query: {
          template: 'https://www.bing.com/search?q={$}'
        },
        calculator: {
          template: 'https://www.bing.com/search?q={@}'
        },
        currency: {
          template: 'https://www.bing.com/search?q={@}'
        }
      }
    },
    brave: {
      name: 'Brave',
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#FB542B', '#343546']
      },
      textColor: '#e8e8e8',
      types: {
        query: {
          template: 'https://search.brave.com/search?q={$}'
        },
        calculator: {
          template: 'https://search.brave.com/search?q={@}'
        },
        currency: {
          template: 'https://search.brave.com/search?q={@}'
        }
      }
    }
  }
}
