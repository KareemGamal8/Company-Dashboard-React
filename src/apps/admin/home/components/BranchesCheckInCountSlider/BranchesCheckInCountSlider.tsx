import { Carousel } from "@mantine/carousel";
import { Avatar, Divider, Flex, Text, Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import { IconStar } from "@tabler/icons-react";
import {
  CarouselSlide,
  SendRequestButton,
} from "app/home/components/BranchesCheckInCountSlider/BranchesCheckInCountSlider.Style";
import { BranchesCheckInsSliderStyles } from "apps/admin/home/Home-Style";
import { homeAtom } from "apps/admin/home/atom/home-atom";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function BranchesCheckInCountSlider() {
  const branches = homeAtom.use("branches");
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Flex direction="column" gap="3rem">
      <Flex justify="space-between" align="center">
        <Flex direction="column" gap="0.2rem">
          <Title order={3} m={0} fw={700}>
            {trans("checkInsCountTitle")}
          </Title>
        </Flex>
      </Flex>
      <Carousel
        height="fit-content"
        controlsOffset="xs"
        controlSize={40}
        loop
        slideSize="30%"
        slidesToScroll={1}
        align="start"
        breakpoints={[
          { maxWidth: "lg", slideSize: "30%" },
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%" },
        ]}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={BranchesCheckInsSliderStyles}>
        {branches.map((branch, index) => (
          <CarouselSlide key={index}>
            <Flex direction="column" align="center" justify="center" gap="1rem">
              <Avatar
                size="xl"
                src={branch.thumb_url["1x"]}
                alt={branch.branch_name}
                radius="50%"
              />

              <Title order={3}>{branch.branch_name}</Title>
              <Flex align="center" gap={5}>
                <Text c="#4d4c4c">{trans("checkInCountThisMonth")}: </Text>
                <Text color="blue" fw={700}>
                  {branch.check_ins_this_month}
                </Text>
              </Flex>
              <Flex align="center" gap={5}>
                <Text c="#4d4c4c">{trans("totalCheckInCount")}: </Text>
                <Text color="blue" fw={700}>
                  {branch.check_ins_total}
                </Text>
              </Flex>
              <Flex gap="0.3rem" align="center">
                <IconStar color="#FFAA29" fill="#FFAA29" />
                <Text span fz="1rem" fw={600}>
                  {branch.rating}
                </Text>
                <Divider orientation="vertical" />
                <SendRequestButton fw={600} fz="0.9rem">
                  {trans("rating")}
                </SendRequestButton>
              </Flex>
            </Flex>
          </CarouselSlide>
        ))}
      </Carousel>
    </Flex>
  );
}
