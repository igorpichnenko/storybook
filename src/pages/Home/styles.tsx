import { Card, Tabs } from '@mui/material';
import { styled } from '@mui/system';

export const WrapperCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  padding: ' 60px 30px 30px 30px',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    padding: '135px 45px 50px 45px',
    width: '100%',
    boxShadow: 'unset',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '50px 15px 50px 15px',
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  overflow: 'auto',
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    position: 'unset',
  },
}));

export const BasicTabsWrapper = styled('div')(({ theme }) => ({
  marginTop: '57.5px',
  width: '300px',
  [theme.breakpoints.down('md')]: { marginTop: '87.5px', width: '100%' },
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    textColor="inherit"
    centered
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: '34px',
    width: '100%',
    backgroundColor: '#2b96f1',
    borderRadius: '10px',
  },
});

export const CardContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: 0.1,
  boxShadow: '0px -1px 0px rgba(0, 0, 0, 0.08)',
  marginTop: '35.5px',
  width: '300px',
  [theme.breakpoints.down('md')]: { width: '100%' },
}));

export const ImgWrapper = styled('div')(({ theme }) => ({
  marginTop: '55px',
  marginBottom: '14px',
  [theme.breakpoints.down('md')]: { marginTop: '234px' },
  [theme.breakpoints.down('sm')]: { marginTop: '172px' },
  [theme.breakpoints.down('xs')]: { marginTop: '80px' },
}));

export const ButtonWrapper = styled('div')(({ theme }) => ({
  marginTop: '55px',
  width: '100%',
  [theme.breakpoints.down('md')]: { marginTop: '390px' },
  [theme.breakpoints.down('sm')]: { marginTop: '327px' },
  [theme.breakpoints.down('xs')]: { marginTop: '120px' },
}));
