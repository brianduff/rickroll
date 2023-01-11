import { createContext } from "@lit-labs/context";
import { Router } from "@lit-labs/router";
import { Student } from "@backend-types/student";

// Provides access to the router
export const routerContext = createContext<Router>('router');
