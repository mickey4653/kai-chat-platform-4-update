const styles = {
  discoveryGridProps: {
    container: true,
    item: true,
    mobileSmall: true,
    flexDirection: 'column',
    sx: {
      // background: 'rgba(24, 26, 32, 0.05)',
      transform: { laptop: 'scale(0.8)', desktop: 'scale(0.9)' },
    },
    width: '100%',
    height: '100%',
    ml: { laptop: -25, desktop: -15 },
    mt: { laptop: -10, desktop: -5 },
  },
  discoveryProps: {
    container: true,
    item: true,
    mobileSmall: true,
    rowGap: { laptop: 2, desktop: 4 },
    px: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
    flexDirection: 'column',

    sx: (theme) => ({
      borderRadius: '15px',
      borderColor: '#B791FF',
    }),
  },
  discoveryPanelProps: {
    sx: (theme) => ({
      px: 2,
      py: 2,
      background: theme.palette.Common.Black['100p'],
      borderRadius: '16px 16px 0 0',
      width: { desktop: '350px', mobile: '338px', mobileSmall: '330px' },
    }),
  },

  unionIconGridProps: {
    container: true,
    alignItems: 'center',
    sx: (theme) => ({
      width: { desktop: '350px', mobile: '338px', mobileSmall: '330px' },
      mt: { laptop: -1, desktop: -3 },
      px: 2,
      py: 2,
    }),
  },

  unionIconTextProps: {
    sx: {
      mb: 1,
      color: '#9E94A5',
    },
  },
  discoveryIconProps: {
    sx: {
      fontSize: '24px',
    },
  },
  discoveryPanelTextProps: {
    sx: (theme) => ({
      mt: 1,
      mb: 1,
      color: theme.palette.Common.White['100p'],
    }),
  },

  avatarGridProps: {
    container: true,
    item: true,
    // display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    // position: 'relative',
    sx: (theme) => ({
      ml: 2,
      px: 2,
      py: 2,
      // mt:1,
      mt: { laptop: 1, desktop: -1 },
      background: theme.palette.Background.gradient.purple,
      borderRadius: '16px',
      width: { desktop: '320px', mobile: '308px', mobileSmall: '130px' },
      height: { desktop: '190px', mobile: '178px', mobileSmall: '170px' },
    }),
  },

  avatarTextGridProps: {
    // sx: (theme)=>({
    // }),
  },
  avatarHeaderTextProps: {
    // fontSize:{ laptop: '14px', desktop: '16px' },
    fontSize: '18px',
    fontWeight: 'bold',
  },

  avatarSubTextProps: {
    // fontSize:{ laptop: '8px', desktop: '9.5px' },
    fontSize: '11px',
  },
  avatarTextBoxProps: {
    item: true,
    alignItems: 'center',
    sx: (theme) => ({
      background: theme.palette.Background.gradient.grey,
      borderRadius: '5px',
      padding: '10px 15px 10px 25px',
      color: theme.palette.Common.White['100p'],
    }),
    right: { laptop: 240, desktop: 241 },
    top: { laptop: 40, desktop: 44 },
    position: 'relative',
    zIndex: 2,
    width: { laptop: '280px', desktop: '300px' },
    height: { laptop: '70px', desktop: '80px' },
  },

  avatarImageGridProps: {
    item: true,
    sx: {
      position: 'relative',
      // zIndex: 1,
      top: { laptop: -14, desktop: -17 },
      right: { laptop: 3, desktop: -3 },
      svg: {
        transform: { laptop: 'scale(1.2)', desktop: 'scale(1.30)' },
      },
    },
  },
  starGroupIconGridProps: {
    item: true,
    sx: {
      position: 'relative',
      top: { laptop: -40, desktop: -44 },
      left: { laptop: 50, desktop: 60 },
      // svg:{backgroundColor: '#B791FF',},
    },
  },

  avatarImageProps: {
    sx: {},
  },

  starGroupIconProps: {
    // ml:-15,
  },
  cardGridProps: {
    container: true,
    display: 'flex',
    alignItems: 'center',
    spacing: 1,
    // backgroundColor: '#B791FF',
    width: { desktop: '320px', mobile: '308px', mobileSmall: '130px' },
    height: { laptop: '280px', desktop: '290px' },
    overflow: 'scroll',
    sx: {
      position: 'relative',
      top: { laptop: -25, desktop: -20 },
      right: { laptop: -30, desktop: -40 },
      pb: 1,
    },
  },

  cardProps: {
    sx: {
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
      },
      width: { laptop: '142px', desktop: '148px' },
      height: { laptop: '360px', desktop: '350px' },
    },
  },
  cardTitleProps: {
    sx: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
  },
  cardDescriptionProps: {
    sx: (theme) => ({
      fontSize: '12px',
      color: theme.palette.Greyscale[400],
    }),
  },

  backImageProps: {
    width: '100%', // Adjust width as needed
    height: 'auto', // Adjust height as needed
  },
};
export default styles;
