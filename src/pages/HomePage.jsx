import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	useTheme,
} from "@mui/material";

import venn from "../res/venn.svg";
import save from "../res/save.svg";
import list from "../res/list.svg";
import five_whys from "../res/WHY’S.svg";
import HMW from "../res/HMW.svg";
import elevator from "../res/elevator.svg";
import notebook from "../res/techno-book.svg";

const HomePage = () => {
	const cards = {
		venn: {
			icon: venn,
			title: "Venn Diagram",
			description:
				"ElevateMe is an app that generates problem statements. It follows the Technopreneurship Workbook. A group of CIT-U students make this app to automate the current and long process of tecnopreneurship workbook.",
		},
		saved_list: {
			icon: save,
			title: "Saved List",
			description:
				"ElevateMe is an app that generates problem statements. It follows the Technopreneurship Workbook. A group of CIT-U students make this app to automate the current and long process of tecnopreneurship workbook.",
		},
		statement_list: {
			icon: list,
			title: "Saved List",
			description:
				"ElevateMe is an app that generates problem statements. It follows the Technopreneurship Workbook. A group of CIT-U students make this app to automate the current and long process of tecnopreneurship workbook.",
		},
		five_whys: {
			icon: five_whys,
			title: "5 Why's",
			description:
				"ElevateMe is an app that generates problem statements. It follows the Technopreneurship Workbook. A group of CIT-U students make this app to automate the current and long process of tecnopreneurship workbook.",
		},
		hmw: {
			icon: HMW,
			title: "How Might We",
			description:
				"ElevateMe is an app that generates problem statements. It follows the Technopreneurship Workbook. A group of CIT-U students make this app to automate the current and long process of tecnopreneurship workbook.",
		},
		elevator_pitch: {
			icon: elevator,
			title: "Elevator Pitch",
			description:
				"ElevateMe is an app that generates problem statements. It follows the Technopreneurship Workbook. A group of CIT-U students make this app to automate the current and long process of tecnopreneurship workbook.",
		},
	};

	var theme = useTheme();

	return (
		<Box>
			<Box sx={{ paddingTop: 10, px: 13 }}>
				<Grid container spacing={6}>
					{/* This is the left div*/}
					<Grid item xs={12} md={6}>
						<Typography variant="h1">ElevateMe</Typography>
						<br />
						<Typography variant="body1" fontWeight={"bold"}>
							ElevateMe is an app that generates problem statements. It follows
							the Technopreneurship Workbook. A group of CIT-U students made
							this app to automate the current and long process of
							technopreneurship workbook.
						</Typography>
						<br />
						<Typography variant="body1">
							Its goal is to shorten the time lorem ipsum setrsa nerates problem
							statements. It follows the Technopreneurship Workbook. A group of
							CIT-U students made this app to automate the current and long
							process of technopreneurship workbook.
						</Typography>
						<br />
						<Button variant="contained" sx={{ py: 1, px: 5, borderRadius: 4 }}>
							About
						</Button>
					</Grid>
					{/* This is the right div */}
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								bgcolor: "primary.main",
							}}>
							RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT
							DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV
							HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE
							RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT
							DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV HERE RIGHT DIV
							HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
							HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
							HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
							HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
							HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
							HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
							HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
						</Box>
						{/* <Box component="img" src={notebook} /> */}
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ px: 30, py: 5 }}>
				<Box>
					<Typography variant="h2" textAlign={"center"}>
						Features
					</Typography>
					<br />
					<Typography variant="body1" textAlign={"center"}>
						ElevateMe is an app that generates problem statements. It follows
						the Technopreneurship Workbook. A group of CIT-U students made this
						app to automate the current and long process of technopreneurship
						workbook.
					</Typography>
				</Box>
			</Box>
			<Grid container spacing={2} sx={{ px: 26, marginBottom: 8 }}>
				{Object.entries(cards).map(([key, card]) => (
					<Grid item xs={12} md={4} key={key}>
						<Card
							variant="outlined"
							sx={{
								borderRadius: 5,
								boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 15px 0px",
							}}>
							<CardActionArea>
								<CardContent>
									<CardMedia component="img" src={card.icon} sx={{ p: 5 }} />
									<Typography variant="h5" textAlign={"center"}>
										{card.title}
									</Typography>
									<Typography variant="body1" textAlign={"center"}>
										{card.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default HomePage;