import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { syncUser } from "../lib/api";

const useUserSync = () => {
    const { isSignedIn } = useAuth();
    const { user, isLoaded } = useUser();

    const { mutate: syncUserMutation, isSuccess } = useMutation({ mutationFn: syncUser });

    useEffect(() => {
        if (isSignedIn && isLoaded && user) {
            const name =
                user.fullName ||
                `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
                user.emailAddresses?.[0]?.emailAddress?.split("@")[0] ||
                "User";

            const email = user.emailAddresses?.[0]?.emailAddress || "";
            const imageUrl = user.imageUrl || "";

            syncUserMutation({
                email,
                name,
                imageUrl,
            });
        }
    }, [isSignedIn, isLoaded, user, syncUserMutation]);

    return { isSynced: isSuccess };
};

export default useUserSync;