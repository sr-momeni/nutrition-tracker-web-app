import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const DEFAULT_MEAL_IMAGE = "/icons/food-log-icon-192.png";

export function CalorieHistoryCard({ meal }) {
  const { name, calories, date, image } = meal;
  const imageSrc = image || DEFAULT_MEAL_IMAGE;

  return (
    <Card className="h-full min-h-[180px] border border-orange-100/60 bg-white/80 shadow-lg shadow-orange-100/40">
      <CardBody className="flex h-full flex-col gap-3 p-4">
        <div className="flex items-center gap-3">
          <img
            src={imageSrc}
            alt={name}
            className="h-14 w-14 rounded-2xl border border-white/60 object-cover shadow-sm shadow-orange-200/60"
          />
          <div>
            <Typography variant="h6" className="text-[var(--food-primary-dark)]">
              {name}
            </Typography>
            <Typography variant="small" className="text-slate-500">
              {date}
            </Typography>
          </div>
        </div>
        <Typography
          variant="h5"
          className="mt-auto font-semibold text-[var(--food-primary)]"
        >
          {calories} kcal
        </Typography>
      </CardBody>
    </Card>
  );
}

CalorieHistoryCard.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    calories: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    date: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default CalorieHistoryCard;
