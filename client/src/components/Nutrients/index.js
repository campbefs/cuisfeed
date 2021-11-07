import React from "react";
import {Table, Text, Box, Mask, Image} from "gestalt";

export default function Nutrients() {

  

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
        <Table.Row>
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
      </Table.Body>
    </Table>
  )
}

