import { useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { tokens } from '../../theme';
import mockGeoFeatures from '../../data/mockGeoFeatures';

export const AppGeo = ({ data, isDashboard = false }: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      features={mockGeoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      projectionScale={isDashboard ? 40 : 150}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={false}
      borderWidth={1}
      borderColor="#152538"
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
            },
            text: {
              fill: colors.redAccent[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.redAccent[100],
          },
        },
        tooltip: {
          container: {
            color: colors.grey[500],
          },
        },
      }}
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#ffffff',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
