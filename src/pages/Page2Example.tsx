import { memo } from "react";
import { declareComponentKeys, useTranslation } from "i18n";

export const Page2Example = memo(() => {
	const { t } = useTranslation({ Page2Example })

	return <h1>{t("Page2Title")}</h1>

});

export const { i18n } = declareComponentKeys<
	| "Page2Title"
>()({ Page2Example })