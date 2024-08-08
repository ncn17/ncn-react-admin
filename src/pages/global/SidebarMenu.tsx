import { useState } from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import {
  Menu,
  menuClasses,
  MenuItem,
  Sidebar,
  sidebarClasses,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import PeopleOutlined from '@mui/icons-material/PeopleOutlined';
import ContactsOutlined from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlined from '@mui/icons-material/ReceiptOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlined from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlined from '@mui/icons-material/TimelineOutlined';
import MapOutlined from '@mui/icons-material/MapOutlined';
import { tokens } from '../../theme';
import UserProfile from '../../assets/profile.jpg';

type ItemType = {
  title: string,
  to: string,
  icon: React.ReactNode,
  selected: string,
  setSelected: (title: string) => void,
};

const Item = ({ title, to, selected, icon, setSelected }: ItemType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      icon={icon}
      onClick={() => setSelected(title)}
      component={<Link to={to} />}
    >
      <Typography textTransform="capitalize">{title}</Typography>
    </MenuItem>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Typography
      variant="h6"
      color={colors.grey[200]}
      sx={{ m: '15px 0 5px 20px' }}
    >
      {title}
    </Typography>
  );
};

export default function SidebarMenu() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapse, setIsCollapse] = useState(false);
  const [selected, setSelected] = useState('dashboard');

  return (
    <Sidebar
      collapsed={isCollapse}
      rootStyles={{
        border: 'none !important',
        [`.${sidebarClasses.container}`]: {
          backgroundColor: `${colors.primary[400]}`,
        },
      }}
    >
      <Menu
        rootStyles={{
          '.ps-active': {
            color: '#6870fa !important',
          },
          [`.${menuClasses.button} `]: {
            marginLeft: !isCollapse ? '15px' : '0px',
            '&:hover': {
              backgroundColor: 'transparent !important',
              color: '#868dfb !important',
            },
          },
        }}
      >
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={isCollapse ? <MenuOutlined /> : undefined}
          style={{ color: colors.grey[100], margin: '10px 0 15px 0' }}
        >
          {!isCollapse && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography
                variant="h3"
                textTransform="uppercase"
                color={colors.grey[100]}
              >
                Adminis
              </Typography>
              <IconButton onClick={() => setIsCollapse(!isCollapse)}>
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {!isCollapse && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                width="100px"
                height="100px"
                src={UserProfile}
                style={{ borderRadius: '50%', cursor: 'pointer' }}
                alt="user profile"
              />
            </Box>
            <Box mt="10px" textAlign="center">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                style={{ fontWeight: 'bold' }}
              >
                Ed Roh
              </Typography>
              <Typography variant="h6" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
        <Item
          title="dashboard"
          to="/"
          selected={selected}
          icon={<HomeOutlined />}
          setSelected={setSelected}
        />
        <SectionTitle title="Data" />
        <Item
          title="Manage Team"
          to="/teams"
          selected={selected}
          icon={<PeopleOutlined />}
          setSelected={setSelected}
        />
        <Item
          title="Contacts information"
          to="/contacts"
          selected={selected}
          icon={<ContactsOutlined />}
          setSelected={setSelected}
        />
        <Item
          title="Invoices Balances"
          to="/invoices"
          selected={selected}
          icon={<ReceiptOutlined />}
          setSelected={setSelected}
        />
        <SectionTitle title="Pages" />
        <Item
          title="Profil Form"
          to="/profil-form"
          selected={selected}
          icon={<PersonOutlined />}
          setSelected={setSelected}
        />
        <Item
          title="Calendar"
          to="/calendar"
          selected={selected}
          icon={<CalendarTodayOutlined />}
          setSelected={setSelected}
        />
        <Item
          title="FAQ Page"
          to="/faq"
          selected={selected}
          icon={<HelpOutlineOutlined />}
          setSelected={setSelected}
        />
        <SectionTitle title="Charts" />
        <Item
          title="Bar Chart"
          to="/bar"
          icon={<BarChartOutlined />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Pie Chart"
          to="/pie"
          icon={<PieChartOutlineOutlined />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Line Chart"
          to="/line"
          icon={<TimelineOutlined />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Geography Chart"
          to="/geography"
          icon={<MapOutlined />}
          selected={selected}
          setSelected={setSelected}
        />
      </Menu>
    </Sidebar>
  );
}

// import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';
// import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
// import PieChartOutlineOutlined from '@mui/icons-material/PieChartOutlineOutlined';
// import TimelineOutlined from '@mui/icons-material/TimelineOutlined';
// import MapOutlined from '@mui/icons-material/MapOutlined';
