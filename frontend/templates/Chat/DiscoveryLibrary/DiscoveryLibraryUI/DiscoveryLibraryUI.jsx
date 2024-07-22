import React, { useEffect, useState } from "react";
import DiscoveryIcon from "@/assets/svg/add-block2.svg";
import UnionIcon from "@/assets/svg/Union.svg";
import StarGroupIcon from "@/assets/svg/starGroupIcon.svg";
import AvatarImage from "@/assets/svg/ReadyPlayerMeAvatar.svg";
import imageCover1 from "@/assets/svg/imageCover1.svg";
import imageCover2 from "@/assets/svg/imageCover2.svg";
import imageCover3 from "@/assets/svg/imageCover3.svg";
import imageCover4 from "@/assets/svg/imageCover4.svg";

import { Grid, IconButton, Card, CardContent, CardActionArea, List, ListItem,Typography } from "@mui/material";

import styles from "./styles";


const imageUrls = [
  imageCover1,
  imageCover2,
  imageCover3,
  imageCover4
  // Add more image URLs as needed
];

const getRandomImage = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const DiscoveryLibraryUI = (props) => {


    const {onSelect} = props;
    const [customPrompts, setCustomPrompts] = useState([]);

    useEffect(() => {
      // Define your custom prompts here
      const categorizePrompts = () => [
        { title: 'Math Tutor', description: 'From now on, I want you to act as a math tutor. I will be asking you questions related to various mathematical concepts, including algebra, geometry, calculus, and statistics. Please provide detailed explanations, step-by-step solutions, and relevant examples for each topic we discuss.' },
        { title: 'Biology Tutor', description: 'Please act as my biology tutor. I will ask you about topics such as cell biology, genetics, evolution, ecology, and human anatomy. Provide comprehensive explanations, diagrams, and examples to help me understand these biological concepts.' },
        { title: 'Programming Tutor', description: 'I want you to be my programming tutor. I will ask you about various programming languages, coding concepts, algorithms, and debugging techniques. Provide clear explanations, code examples, and step-by-step guidance for writing and understanding code.' },
        // { title: 'Programming Tutor', description: 'I want you to be my programming tutor. I will ask you about various programming languages, coding concepts, algorithms, and debugging techniques. Provide clear explanations, code examples, and step-by-step guidance for writing and understanding code.' },
        // { title: 'Programming Tutor', description: 'I want you to be my programming tutor. I will ask you about various programming languages, coding concepts, algorithms, and debugging techniques. Provide clear explanations, code examples, and step-by-step guidance for writing and understanding code.' },

        // Add more prompts as needed
      ];
      const fetchPrompts = async () => {
        const prompts = categorizePrompts(); // This could be an API call or local data
        setCustomPrompts(prompts);
      };
  
      fetchPrompts();
    }, []);

  return (
    <Grid container {...styles.discoveryGridProps}>
    <Grid container {...styles.discoveryProps}>
      <Grid container {...styles.discoveryPanelProps}>
        <IconButton>
          <DiscoveryIcon {...styles.discoveryIconProps} />
        </IconButton>
        <Typography {...styles.discoveryPanelTextProps}>Discovery</Typography>
      </Grid>

      <Grid item {...styles.unionIconGridProps}>
        <IconButton>
          <UnionIcon />
        </IconButton>
        <Typography {...styles.unionIconTextProps}>
          Welcome Back Tauseef!
        </Typography>
      </Grid>

      <Grid container {...styles.avatarGridProps}>
        <Grid item {...styles.avatarImageGridProps}>
          <AvatarImage {...styles.avatarImageProps} />
        </Grid>
        <Grid item {...styles.starGroupIconGridProps}>
        <StarGroupIcon {...styles.starGroupIconProps} />
        </Grid>
        <Grid item {...styles.avatarTextBoxProps}>
          <Typography {...styles.avatarHeaderTextProps}>
            AI Custom Course Creator
          </Typography>
          <Typography {...styles.avatarSubTextProps}>
            Have Kai help you build your class from scratch!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid {...styles.cardGridProps} >
        {customPrompts?.map((prompt, index) => (
          <Grid item key={index} onClick={() => onSelect(prompt)}>
            <Card {...styles.cardProps(getRandomImage())}>
              <CardActionArea>
                <CardContent>
                  <Typography {...styles.cardTitleProps}>{prompt.title}</Typography>
                  <Typography {...styles.cardDescriptionProps}>{prompt.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default DiscoveryLibraryUI;
