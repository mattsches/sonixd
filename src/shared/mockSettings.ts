export const mockSettings = {
  theme: 'defaultDark',
  showDebugWindow: false,
  globalMediaHotkeys: true,
  cachePath: 'C:\\Users\\jli\\AppData\\Roaming\\Electron',
  volume: 0.93,
  seekForwardInterval: 5,
  seekBackwardInterval: 5,
  volumeFade: true,
  repeat: 'all',
  shuffle: false,
  scrollWithCurrentSong: true,
  cacheImages: true,
  cacheSongs: false,
  pollingInterval: 20,
  fadeDuration: 9,
  fadeType: 'equalPower',
  scrobble: false,
  gridCardSize: 200,
  playlistViewType: 'grid',
  albumViewType: 'grid',
  musicListFontSize: '13',
  musicListRowHeight: '50',
  musicListColumns: [
    {
      id: '#',
      dataKey: 'index',
      alignment: 'center',
      resizable: true,
      width: 50,
      label: '# (Drag/Drop)',
    },
    {
      id: 'Title',
      dataKey: 'combinedtitle',
      alignment: 'left',
      resizable: true,
      width: 273,
      label: 'Title (Combined)',
    },
    {
      id: 'Album',
      dataKey: 'album',
      alignment: 'left',
      resizable: true,
      width: 263,
      label: 'Album',
    },
    {
      id: 'Duration',
      dataKey: 'duration',
      alignment: 'center',
      resizable: true,
      width: 110,
      label: 'Duration',
    },
    {
      id: 'Bitrate',
      dataKey: 'bitRate',
      alignment: 'left',
      resizable: true,
      width: 72,
      label: 'Bitrate',
    },
    {
      id: 'Fav',
      dataKey: 'starred',
      alignment: 'center',
      resizable: true,
      width: 100,
      label: 'Favorite',
    },
  ],
  albumListFontSize: '14',
  albumListRowHeight: '60',
  albumListColumns: [
    {
      id: '#',
      dataKey: 'index',
      alignment: 'center',
      resizable: true,
      width: 50,
      label: '#',
    },
    {
      id: 'Title',
      dataKey: 'combinedtitle',
      alignment: 'left',
      resizable: true,
      width: 457,
      label: 'Title (Combined)',
    },
    {
      id: 'Tracks',
      dataKey: 'songCount',
      alignment: 'center',
      resizable: true,
      width: 100,
      label: 'Track Count',
    },
    {
      id: 'Duration',
      dataKey: 'duration',
      alignment: 'center',
      resizable: true,
      width: 80,
      label: 'Duration',
    },
    {
      id: 'Fav',
      dataKey: 'starred',
      alignment: 'center',
      resizable: true,
      width: 100,
      label: 'Favorite',
    },
  ],
  playlistListFontSize: '14',
  playlistListRowHeight: '80',
  playlistListColumns: [
    {
      id: '#',
      dataKey: 'index',
      alignment: 'center',
      resizable: true,
      width: 50,
      label: '#',
    },
    {
      id: 'Art',
      dataKey: 'coverart',
      alignment: 'center',
      resizable: true,
      width: 100,
      label: 'CoverArt',
    },
    {
      id: 'Title',
      dataKey: 'name',
      alignment: 'left',
      resizable: true,
      width: 300,
      label: 'Title',
    },
    {
      id: 'Description',
      dataKey: 'comment',
      alignment: 'left',
      resizable: true,
      width: 200,
      label: 'Description',
    },
    {
      id: 'Tracks',
      dataKey: 'songCount',
      alignment: 'center',
      resizable: true,
      width: 100,
      label: 'Track Count',
    },
    {
      id: 'Owner',
      dataKey: 'owner',
      alignment: 'left',
      resizable: true,
      width: 150,
      label: 'Owner',
    },
    {
      id: 'Modified',
      dataKey: 'changed',
      alignment: 'left',
      resizable: true,
      width: 100,
      label: 'Modified',
    },
  ],
  miniListFontSize: '14',
  miniListColumns: [
    {
      id: '#',
      dataKey: 'index',
      alignment: 'center',
      resizable: true,
      width: 50,
      label: '# (Drag/Drop)',
    },
    {
      id: 'Title',
      dataKey: 'title',
      alignment: 'left',
      resizable: true,
      width: 250,
      label: 'Title',
    },
    {
      id: 'Duration',
      dataKey: 'duration',
      alignment: 'center',
      resizable: true,
      width: 80,
      label: 'Duration',
    },
  ],
  font: 'Poppins',
  server: 'http://192.168.14.11:4040',
  serverBase64: 'aHR0cDovLzE5Mi4xNjguMTQuMTE6NDA0MA==',
  miniListRowHeight: '30',
  dynamicBackground: false,
};
