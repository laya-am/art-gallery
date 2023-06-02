import React from "react";
import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
          <li>
            <Link href="/" passHref>
              <button>
                Spotlight
              </button>
            </Link>
          </li>
          <li>
            <Link href="/art-pieces">
              <button>
                Pieces
              </button>
            </Link>
          </li>
          <li>
            <Link href="/favorites">
              <button>
                Favorites
              </button>
            </Link>
          </li>
        </ul>
    );
  }