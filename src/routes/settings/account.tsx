import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/settings/account")({
	component: AccountSettings,
});

function AccountSettings() {
  return <div class="flex flex-1 justify-center items-center text-2xl font-bold">Account</div>;
}
