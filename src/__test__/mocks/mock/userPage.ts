import {
  RestContext,
  RestRequest,
  ResponseComposition,
} from 'msw';
import { IUserResponse } from '../../../types';

export const UserResponse: IUserResponse = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Mademoiselle',
        first: 'Beatrix',
        last: 'Renaud',
      },
      location: {
        street: {
          number: 3629,
          name: 'Esplanade du 9 Novembre 1989',
        },
        city: 'Heiligenschwendi',
        state: 'Fribourg',
        country: 'Switzerland',
        postcode: 5486,
        coordinates: {
          latitude: '-48.8422',
          longitude: '155.2510',
        },
        timezone: {
          offset: '+4:30',
          description: 'Kabul',
        },
      },
      email: 'beatrix.renaud@example.com',
      login: {
        uuid: '2dfa5263-b922-4c2d-9a4d-7309b576af5a',
        username: 'ticklishkoala311',
        password: 'dog123',
        salt: 'IikVj1wO',
        md5: '3d46dacb9adf2b9f052082256da22d00',
        sha1: 'a2f991975c24cec94002997c51d1c4cf55700d10',
        sha256: '98f16653d3a4e56096b0ea6496f23a95853a2a76faf3d05be574ab409ef2bae8',
      },
      dob: {
        date: '1944-10-29T12:21:26.275Z',
        age: 78,
      },
      registered: {
        date: '2012-09-01T10:09:38.423Z',
        age: 10,
      },
      phone: '077 693 63 84',
      cell: '075 824 74 28',
      id: {
        name: 'AVS',
        value: '756.4320.0402.33',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/67.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/67.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/67.jpg',
      },
      nat: 'CH',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Andree',
        last: 'Liebscher',
      },
      location: {
        street: {
          number: 7539,
          name: 'Poststraße',
        },
        city: 'Eschwege',
        state: 'Mecklenburg-Vorpommern',
        country: 'Germany',
        postcode: 90365,
        coordinates: {
          latitude: '-33.7365',
          longitude: '108.3181',
        },
        timezone: {
          offset: '+5:30',
          description: 'Bombay, Calcutta, Madras, New Delhi',
        },
      },
      email: 'andree.liebscher@example.com',
      login: {
        uuid: '72d37b74-d754-4006-9465-4408bcc37edb',
        username: 'crazyrabbit616',
        password: 'warcraft',
        salt: '2SMkphBI',
        md5: 'b3f24ed10d7ff4cd238a4e6955f30c1b',
        sha1: '4c13408e78ebc50ff494e239fda4ffa0aa4adb2a',
        sha256: '76e916547557fa6e36991877bd0a9ff9e9d632394b2105a35e80f9de7ed79d59',
      },
      dob: {
        date: '1997-01-16T02:50:10.639Z',
        age: 25,
      },
      registered: {
        date: '2006-05-16T16:30:07.044Z',
        age: 16,
      },
      phone: '0695-8540552',
      cell: '0178-2786274',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/85.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg',
      },
      nat: 'DE',
    },
    {
      gender: 'female',
      name: {
        title: 'Mademoiselle',
        first: 'Cecilia',
        last: 'Nguyen',
      },
      location: {
        street: {
          number: 5055,
          name: 'Rue Pierre-Delore',
        },
        city: 'Ormont-Dessus',
        state: 'Appenzell Ausserrhoden',
        country: 'Switzerland',
        postcode: 4687,
        coordinates: {
          latitude: '22.8389',
          longitude: '-116.7638',
        },
        timezone: {
          offset: '+8:00',
          description: 'Beijing, Perth, Singapore, Hong Kong',
        },
      },
      email: 'cecilia.nguyen@example.com',
      login: {
        uuid: '4178f4c9-f3da-4f8d-8708-84e4cdb3b63b',
        username: 'brownwolf205',
        password: 'eric',
        salt: 'Azx0TEeV',
        md5: '0f4cc8b0b57902e3f1f69249323d88c9',
        sha1: '529a808f969624a1845278e680a1fcd3b3d8463f',
        sha256: '0a0b9d32231a4eb0048dcd65edc94eb2e99adb6649cf0bfa8ab82b45d948c51c',
      },
      dob: {
        date: '1966-11-23T04:40:52.892Z',
        age: 56,
      },
      registered: {
        date: '2014-03-26T03:29:19.168Z',
        age: 8,
      },
      phone: '078 390 42 74',
      cell: '078 353 38 57',
      id: {
        name: 'AVS',
        value: '756.6687.9462.56',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/68.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/68.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/68.jpg',
      },
      nat: 'CH',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Daniel',
        last: 'Ramo',
      },
      location: {
        street: {
          number: 8501,
          name: 'Hatanpään Valtatie',
        },
        city: 'Lempäälä',
        state: 'Uusimaa',
        country: 'Finland',
        postcode: 53245,
        coordinates: {
          latitude: '-59.1908',
          longitude: '88.1781',
        },
        timezone: {
          offset: '+8:00',
          description: 'Beijing, Perth, Singapore, Hong Kong',
        },
      },
      email: 'daniel.ramo@example.com',
      login: {
        uuid: 'fd8fa0c6-66fb-471c-94f1-6ab66c6f064c',
        username: 'redsnake246',
        password: 'firefox',
        salt: 'RB6Ks2lo',
        md5: '78f91aa7303439dce0ef0742701189e3',
        sha1: '489ac1b88b76ad3cc672ce0ec7d2cc44dfef7b83',
        sha256: 'b3bf2b6e441f4e5ec1a91edfea982ad5f27f9f3f58f74d3aaff21077e8d2f315',
      },
      dob: {
        date: '1996-12-13T12:06:24.165Z',
        age: 26,
      },
      registered: {
        date: '2011-09-24T01:58:16.880Z',
        age: 11,
      },
      phone: '05-291-348',
      cell: '046-227-82-88',
      id: {
        name: 'HETU',
        value: 'NaNNA177undefined',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/41.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/41.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/41.jpg',
      },
      nat: 'FI',
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Kay',
        last: 'Rivera',
      },
      location: {
        street: {
          number: 6137,
          name: 'Crockett St',
        },
        city: 'Devonport',
        state: 'Western Australia',
        country: 'Australia',
        postcode: 864,
        coordinates: {
          latitude: '-9.8900',
          longitude: '72.3873',
        },
        timezone: {
          offset: '+5:00',
          description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
        },
      },
      email: 'kay.rivera@example.com',
      login: {
        uuid: '5956d8ba-adcf-46a3-9a74-2cdd27f7b6e9',
        username: 'greenpanda463',
        password: 'mark',
        salt: 'XbcDRku9',
        md5: 'dc202a0d3a255dd64a9a45a8322f82e8',
        sha1: 'eca6802b16ae24bcbd362bc8ae591cca65358ea2',
        sha256: '86ae9a92c379543661d551b9d3efe6f712f2309546cbc7815eee823ffd031781',
      },
      dob: {
        date: '1947-12-26T07:54:06.193Z',
        age: 75,
      },
      registered: {
        date: '2005-02-27T07:39:38.953Z',
        age: 17,
      },
      phone: '06-1004-1333',
      cell: '0481-086-393',
      id: {
        name: 'TFN',
        value: '727273976',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/16.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/16.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/16.jpg',
      },
      nat: 'AU',
    },
  ],
  info: {
    seed: '9ed150d7b9b334c4',
    results: 5,
    page: 1,
    version: '1.3',
  },
};

export const UserPage = (_: RestRequest, res: ResponseComposition, ctx: RestContext) => res(
  ctx.status(200),
  ctx.json(UserResponse),
);
