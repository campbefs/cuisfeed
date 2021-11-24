import React from "react";
import {Table, Text, Box, Mask, Image} from "gestalt";

export default function Nutrients(props) {

  const { totalnutrients, totaldaily } = props;

  // convert to JSON (stored as string)
  const totalNutrients = JSON.parse(totalnutrients);
  const totalDaily = JSON.parse(totaldaily);


  return (
    <Table maxHeight={200}>
      <Table.Header sticky>
        <Table.Row>
          <Table.HeaderCell>
            <Text weight="bold">Label</Text>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Text weight="bold">Quantity</Text>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Text weight="bold">Daily Value</Text>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>

        {/* <Table.Row> */}

          {/* example of an image in a table cell */}
          {/* <Table.Cell>
            <Box width={50}>
              <Mask rounding="circle">
                <Image
                  alt="Luna"
                  src="https://i.ibb.co/QY9qR7h/luna.png"
                  naturalHeight={50}
                  naturalWidth={50}
                />
              </Mask>
            </Box>
          </Table.Cell> */}

          {/* <Table.Cell><Text>Energy</Text></Table.Cell>
          <Table.Cell><Text>2490kcal</Text></Table.Cell>
          <Table.Cell><Text>124%</Text></Table.Cell>
        </Table.Row> */}

        {/* No Map function for Objects. Turn object into array of keys and map that */}
        {Object.keys(totalDaily).map((key, index) => {
          
          return (
            <Table.Row>
              <Table.Cell><Text>{totalDaily[key].label}</Text></Table.Cell>
              <Table.Cell>
                <Text>
                  {/* Round to decimal place. 10 for 1. 100 for 2 decimals */}
                  {Math.round(totalNutrients[key].quantity * 10) / 10}
                  {totalNutrients[key].unit}
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text>
                  {Math.round(totalDaily[key].quantity * 10) / 10}
                  { totalDaily[key].unit}
                </Text>
              </Table.Cell>
            </Table.Row>
          )
        })}

{/*         
        <Table.Row>
          <Table.Cell><Text>Fat</Text></Table.Cell>
          <Table.Cell><Text>210g</Text></Table.Cell>
          <Table.Cell><Text>323%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Energy</Text></Table.Cell>
          <Table.Cell><Text>2490kcal</Text></Table.Cell>
          <Table.Cell><Text>124%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Fat</Text></Table.Cell>
          <Table.Cell><Text>210g</Text></Table.Cell>
          <Table.Cell><Text>323%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Energy</Text></Table.Cell>
          <Table.Cell><Text>2490kcal</Text></Table.Cell>
          <Table.Cell><Text>124%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Fat</Text></Table.Cell>
          <Table.Cell><Text>210g</Text></Table.Cell>
          <Table.Cell><Text>323%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Energy</Text></Table.Cell>
          <Table.Cell><Text>2490kcal</Text></Table.Cell>
          <Table.Cell><Text>124%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Fat</Text></Table.Cell>
          <Table.Cell><Text>210g</Text></Table.Cell>
          <Table.Cell><Text>323%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Energy</Text></Table.Cell>
          <Table.Cell><Text>2490kcal</Text></Table.Cell>
          <Table.Cell><Text>124%</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text>Fat</Text></Table.Cell>
          <Table.Cell><Text>210g</Text></Table.Cell>
          <Table.Cell><Text>323%</Text></Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  )
}

