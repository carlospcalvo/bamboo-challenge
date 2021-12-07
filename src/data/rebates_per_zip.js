const rebatePerZone = {
	1: 3996.96,
	2: 3785.01,
	3: 3405.52,
	4: 2920.08,
};

export const getRebate = (zip) => {
	if (zip >= 5800 && zip <= 6243) {
		return rebatePerZone[3];
	} else if (zip >= 6244 && zip <= 6250) {
		return rebatePerZone[4];
	} else if (zip >= 6251 && zip <= 6254) {
		return rebatePerZone[3];
	} else if (zip >= 6255 && zip <= 6270) {
		return rebatePerZone[4];
	} else if (zip >= 6271 && zip <= 6315) {
		return rebatePerZone[3];
	} else if (zip >= 6316 && zip <= 6357) {
		return rebatePerZone[4];
	} else if (zip >= 6358 && zip <= 6393) {
		return rebatePerZone[3];
	} else if (zip >= 6394 && zip <= 6400) {
		return rebatePerZone[4];
	} else if (zip >= 6401 && zip <= 6430) {
		return rebatePerZone[3];
	} else if (zip >= 6431 && zip <= 6431) {
		return rebatePerZone[2];
	} else if (zip >= 6432 && zip <= 6433) {
		return rebatePerZone[3];
	} else if (zip >= 6434 && zip <= 6439) {
		return rebatePerZone[2];
	} else if (zip >= 6440 && zip <= 6441) {
		return rebatePerZone[1];
	} else if (zip >= 6442 && zip <= 6444) {
		return rebatePerZone[3];
	} else if (zip >= 6445 && zip <= 6459) {
		return rebatePerZone[4];
	} else if (zip >= 6460 && zip <= 6467) {
		return rebatePerZone[3];
	} else if (zip >= 6468 && zip <= 6469) {
		return rebatePerZone[2];
	} else if (zip >= 6470 && zip <= 6471) {
		return rebatePerZone[3];
	} else if (zip >= 6472 && zip <= 6474) {
		return rebatePerZone[2];
	} else if (zip >= 6475 && zip <= 6506) {
		return rebatePerZone[3];
	} else if (zip >= 6507 && zip <= 6555) {
		return rebatePerZone[2];
	} else if (zip >= 6556 && zip <= 6573) {
		return rebatePerZone[3];
	} else if (zip >= 6574 && zip <= 6602) {
		return rebatePerZone[2];
	} else if (zip >= 6603 && zip <= 6607) {
		return rebatePerZone[3];
	} else if (zip >= 6608 && zip <= 6641) {
		return rebatePerZone[2];
	} else if (zip >= 6642 && zip <= 6724) {
		return rebatePerZone[1];
	} else if (zip >= 6725 && zip <= 6750) {
		return rebatePerZone[2];
	} else if (zip >= 6751 && zip <= 6797) {
		return rebatePerZone[1];
	} else if (zip >= 6798 && zip <= 6799) {
		return rebatePerZone[2];
	} else if (zip >= 6800 && zip <= 6999) {
		return rebatePerZone[3];
	}
};
