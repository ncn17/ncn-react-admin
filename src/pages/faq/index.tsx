import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  useTheme,
} from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import { Header } from '../../components/header';
import { tokens } from '../../theme';
import { mockFaqs } from '../../data/mockData';

export const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={2}>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Box mt={2}>
        {mockFaqs.map(({ title, body }, index) => (
          <Accordion sx={{ backgroundColor: colors.grey[800] }}>
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{ color: colors.greenAccent[400] }}
            >
              {title}
            </AccordionSummary>
            <AccordionDetails>{body}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
