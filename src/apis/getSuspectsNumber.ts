import apiClient from "./apiClient";

export async function getSuspectsNumber(suspectNumber: number) {
    let userId = localStorage.getItem("userId");
    if (!userId) {
        userId = "454";
    }
    try {
        const response = await apiClient.get(`/suspects/${suspectNumber}`, {
            params: {
                userId: userId,
            },
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}
