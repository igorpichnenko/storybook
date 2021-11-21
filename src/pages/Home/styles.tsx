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
