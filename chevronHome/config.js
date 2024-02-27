window.CONFIG = {
  macros: [
    {
      category: 'Nighttab',
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
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
    },
    {
      category: 'Nighttab',
      name: 'Oblock1',
      triggers: [
        'o',
        'ob',
        'oblock',
      ],
      key: 'KeyO',
      icon: 'Oblock1',
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
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
    },
    {
      category: 'Nighttab',
      name: 'Main',
      triggers: [
        'm',
        'ma',
        'main',
      ],
      key: 'KeyM',
      icon: 'main',
      url: 'https://law-dawg360.github.io/indexes/Main.html',
      normalisedURL: 'law-dawg360.github.io/indexes/Main.html',
      commands: {
        go: {
          template: 'https://law-dawg360.github.io/{$}',
          description: 'go to home'
        },
        search: {
          template: '{@}/indexes/Main.html{$}'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
    },
    {
      category: 'Nighttab',
      name: 'Oblock1',
      triggers: [
        'e',
        'eb',
        'eblock',
      ],
      key: 'KeyE',
      icon: 'eblock2',
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
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
    },


    {
      category: 'Nighttab',
      name: '5',
      triggers: [
        'e',
        'eb',
        'eblock',
      ],
      key: 'KeyP',
      icon: 'eblock2',
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
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
    },
    {
      category: 'Nighttab',
      name: '6',
      triggers: [
        'e',
        'eb',
        'eblock',
      ],
      key: 'KeyA',
      icon: 'eblock2',
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
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
    },
    {
      category: 'Nighttab',
      name: '7',
      triggers: [
        'e',
        'eb',
        'eblock',
      ],
      key: 'KeyG',
      icon: 'eblock2',
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
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
    },
    {
      category: 'Nighttab',
      name: '8',
      triggers: [
        'e',
        'eb',
        'eblock',
      ],
      key: 'KeyE',
      icon: 'eblock2',
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
        color: '#252931'
      },
      textColor: '#0050ff',
      pinned: true
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
