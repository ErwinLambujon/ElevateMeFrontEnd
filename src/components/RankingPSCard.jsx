import { Card, CardContent, Typography, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import React from "react";

const PSListCard = ({ text }) => {
	return (
		<div>
			<Card
				sx={{
					width: "100%",
					borderRadius: 6.2,
					boxShadow: 3,
				}}>
				<CardContent sx={{ display: "flex", alignItems: "center" }}>
					<IconButton>
						<AddCircleOutlineIcon />
					</IconButton>
					<Typography variant="body1" sx={{ mt: 1, color: "#8e8e8e" }}>
						{text}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default PSListCard;