import React from "react";
import { Flex, Text, Box, Mask, Image, TapArea, Button, Layer, Popover, SearchField } from "gestalt";
import pexel1 from "../../assets/images/welcome/pexels-photo-704569.jpeg"
import pexel2 from "../../assets/images/welcome/pexels-photo-2097090.jpeg"


export default function AddRecipeButton() {
  const [open, setOpen] = React.useState(false);
  const [selectedChapter, setSelectedChapter] = React.useState('Plan to Cook');
  const anchorRef = React.useRef();

  const SearchChapterField = () => {
    const ref = React.useRef();

    React.useEffect(() => {
      ref.current.focus();
    }, []);

    return (
      <SearchField
        accessibilityLabel="Search chapters field"
        id="searchField"
        onChange={() => {}}
        placeholder="Search chapters"
        size="lg"
        ref={ref}
      />
    )
  }

  const List = ({ title }) => (
    <Flex direction="column" gap={4}>
      <Text color="darkGray" size="sm">
        { title }
      </Text>
      <Flex direction="column" gap={4}>
        {[
          [ pexel1, 'Plan to Cook', 'Thumbnail image: avacado and egg dish'],
          ['https://i.ibb.co/swC1qpp/IMG-0494.jpg', 'Cooked', 'Thubnail image: a paella with shrimp, green peas, red peppers and yellow rice'],
          [ pexel2, 'Inspiring', 'Thumbnail image: prepared dish'],
        ].map((data, index) => (
            <TapArea key={index} onTap={() => {
              setSelectedChapter(data[1]);
              setOpen(false);
            }}>
              <Flex gap={2} alignItems="center">
                <Box height={50} width={50} overflow="hidden" rounding={2}>
                  <Mask rounding={2}>
                    <Image
                      alt={data[2]}
                      color="rgb(231, 186, 176)"
                      naturalHeight={50}
                      naturalWidth={50}
                      src={data[0]}
                    />
                  </Mask>
                </Box>
                <Text align="center" color="darkGray" weight="bold">
                  {data[1]}
                </Text>
              </Flex>
            </TapArea>
        ))}
      </Flex>
    </Flex>
  );

  return (
    <React.Fragment>
      <Flex alignItems="center" gap={2}>
        <Button
          accessibilityHaspopup={true}
          accessibilityExpanded={open}
          accessibilityControls="example-a11y"
          color="white"
          iconEnd="arrow-down"
          onClick={() => setOpen(!open)}
          ref={anchorRef}
          size="lg"
          selected={open}
          text={selectedChapter}
        />
        <Button color="red" onClick={() => {}} size="lg" text="Save" />
      </Flex>
      {open && (
        <Layer>
          <Popover
            anchor={anchorRef.current}
            id="example-a11y"
            idealDirection="down"
            onDismiss={() => setOpen(false)}
            positionRelativeToAnchor={false}
            size="xl"
          >
            <Box width={360}>
              <Box flex="grow" marginEnd={4} marginStart={4} marginTop={6} marginBottom={8}>
                <Flex direction="column" gap={6}>
                  <Text align="center" color="darkGray" weight="bold">
                    Save to Recipe Book
                  </Text>
                  <SearchChapterField />
                </Flex>
              </Box>
              <Box height={300} overflow="scrollY">
                <Box marginEnd={4} marginStart={4}>
                  <Flex direction="column" gap={8}>
                    <List title="Chapters"/>
                    {/* <List title="All chapters"/> */}
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Popover>
        </Layer>
      )}
    </React.Fragment>
  );
}