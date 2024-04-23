import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import db from "@/lib/supabase/db";

const DashboardPage = async () => {
    const supabase = createServerComponentClient({cookies})

    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return;

    const workspace = await db.query.workspaces.findFirst({where: (workspace, {eq}) => eq(workspace.workspaceOwner, user.id)})

    return <div>DashboardPage</div>
}

export default DashboardPage