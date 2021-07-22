import React, { useEffect } from "react";
import { Flex, Button } from "gestalt";

export default function LeftNav() {
  return (
    <section id="left-nav-bar">
      <div className="left-nav-item">
        <Flex gap={2}>
          <Button size="lg" color="transparent" iconEnd="compass" text="Home" />
        </Flex>
      </div>
    </section>
  );
}